import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function handlerMiddleware(request: NextRequest) {
  const locale = request.cookies.get("NEXT_LOCALE")?.value || "en";
  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}
