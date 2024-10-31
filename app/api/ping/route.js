import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  if (body.message !== "ping") {
    return NextResponse.json({ status: "error", message: "Invalid message" }, { status: 400 });
  }
  return NextResponse.json({ status: "success" }, { status: 200 });
}
