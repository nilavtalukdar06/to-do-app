import { connectDb } from "@/lib/config/db";
import { NextRequest, NextResponse } from "next/server";

const loadDb = async () => {
  connectDb();
};

loadDb();

export async function GET(reuqest) {
  return NextResponse.json({
    msg: "GET Method",
  });
}
