import { NextRequest, NextResponse } from "next/server";

export async function GET(reuqest) {
  return NextResponse.json({
    msg: "GET Method",
  });
}
