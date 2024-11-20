import z, { ZodType } from "zod";

export type PingSchema = { message: string }
export const pingSchema = z.object({
    message: z.string()
}) satisfies ZodType<PingSchema>;
