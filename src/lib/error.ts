import { NextApiRequest, NextApiResponse } from "next";
import { ZodError } from "zod";
import { useZodIntl } from "@/lib/useZodIntl";
import { serverIntl } from "./serverIntl";

export class ForcedError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export async function handleError(error: unknown, res: NextApiResponse, req: NextApiRequest) {
  const { t } = serverIntl(req, "Error");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const zintl = useZodIntl(t);

  if (error instanceof ForcedError) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  if (error instanceof ZodError) {
    return res.status(400).json({ ...zintl(error.issues[0], { defaultError: '', data: '' }), path: error.issues[0].path });
  }
  return res.status(500).json({ message: t("unknown") });
}