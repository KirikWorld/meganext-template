import { z } from "zod";

export function useZodIntl(t: any) {
  // const isClient = typeof window !== "undefined";

  const intlZodErrorMap: z.ZodErrorMap = (issue) => {
    if (issue.message?.startsWith("$$")) {
      return { message: t(`${issue.message.slice(2)}`) };
    }
    if (issue.code === "invalid_string") {
      if (typeof issue.validation !== "string") {
        if ("startsWith" in issue.validation) {
          return {
            message: t(`zod.${issue.code}.startsWith`, {
              startsWith: issue.validation.startsWith
            })
          };
        }
        if ("endsWith" in issue.validation) {
          return {
            message: t(`zod.${issue.code}.endsWith`, {
              endsWith: issue.validation.endsWith
            })
          };
        }
      }

      if (typeof issue.validation === "string") {
        return {
          message: t(`zod.${issue.code}.${issue.validation}`, {
            validation: issue.validation
          })
        };
      }
    }

    if (issue.code === "too_small") {
      if (issue.exact) {
        return {
          message: t(`zod.${issue.code}.${issue.type}.exact`, {
            minimum: `${issue.minimum}`,
            datetime: `${issue.minimum}`
          })
        };
      }
      if (issue.inclusive) {
        return {
          message: t(`zod.${issue.code}.${issue.type}.inclusive`, {
            minimum: `${issue.minimum}`,
            datetime: `${issue.minimum}`
          })
        };
      }
      return {
        message: t(`zod.${issue.code}.${issue.type}.not_inclusive`, {
          minimum: `${issue.minimum}`,
          datetime: `${issue.minimum}`
        })
      };
    }

    if (issue.code === "too_big") {
      if (issue.exact) {
        return {
          message: t(`zod.${issue.code}.${issue.type}.exact`, {
            maximum: `${issue.maximum}`,
            datetime: `${issue.maximum}`
          })
        };
      }
      if (issue.inclusive) {
        return {
          message: t(`zod.${issue.code}.${issue.type}.inclusive`, {
            maximum: `${issue.maximum}`,
            datetime: `${issue.maximum}`
          })
        };
      }
      return {
        message: t(`zod.${issue.code}.${issue.type}.not_inclusive`, {
          maximum: `${issue.maximum}`,
          datetime: `${issue.maximum}`
        })
      };
    }

    try {
      return {
        message: t(`zod.${issue.code}`, {
          expected:
            "expected" in issue
              ? issue.code === "invalid_type"
                ? t(`zod.types.${issue.expected}`)
                : `${issue.expected}`
              : undefined,
          received:
            "received" in issue
              ? issue.code === "invalid_type"
                ? t(`zod.types.${issue.received}`)
                : `${issue.received}`
              : undefined,
          keys: "keys" in issue ? `${issue.keys}` : undefined,
          options: "options" in issue ? `${issue.options}` : undefined,
          multipleOf: "multipleOf" in issue ? `${issue.multipleOf}` : undefined
        })
      };
    } catch {
      return { message: t("unknownValidateError") };
    }
  };

  return intlZodErrorMap;
}
