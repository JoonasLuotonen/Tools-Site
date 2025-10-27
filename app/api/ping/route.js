import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({ ok: true, route: "ping" });
}
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
