import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function errorHandlerMiddleware(request: NextRequest) {
  return NextResponse.next();
}
