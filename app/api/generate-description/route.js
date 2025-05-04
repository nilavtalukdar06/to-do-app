import { NextResponse } from "next/server";
import main from "@/utils/gemini/gemini";

export async function POST(request) {
  try {
    const { title } = await request.json();
    const response = await main(title);
    if (!response) {
      throw new Error("Ai didn't return any response");
    }
    return NextResponse.json({
      description: response,
    });
  } catch (error) {
    console.error(`error generating ai response, error: ${error}`);
    return NextResponse.json({
      message: `internal server error, error: ${error}`,
    });
  }
}
