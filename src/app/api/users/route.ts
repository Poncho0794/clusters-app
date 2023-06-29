import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = { "key": "value" }
  return NextResponse.json({ data })
}