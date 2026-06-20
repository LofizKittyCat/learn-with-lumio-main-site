import { NextRequest, NextResponse } from "next/server";
import { get } from "@vercel/edge-config";

export async function proxy(request: NextRequest) {
  if (process.env.NODE_ENV === "development") {
    return NextResponse.next();
  }

  const isMaintenance = await get<boolean>("maintenanceMode");

  if (isMaintenance && !request.nextUrl.pathname.startsWith("/maintenance")) {
    return NextResponse.redirect(new URL("/maintenance", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     * - API routes (optional, remove if you want maintenance to block API too)
     */
    "/((?!_next/static|_next/image|favicon.ico|api/).*)",
  ],
};
