import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { get } from "@vercel/edge-config";

export async function middleware(req: NextRequest) {
  let maintenanceMode = false;

  try {
    if (process.env.EDGE_CONFIG) {
      maintenanceMode = (await get<boolean>("maintenanceMode")) ?? false;
    }
  } catch {
    maintenanceMode = false;
  }

  if (maintenanceMode && !req.nextUrl.pathname.startsWith("/maintenance")) {
    return NextResponse.redirect(new URL("/maintenance", req.url));
  }

  return NextResponse.next();
}
