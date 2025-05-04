import { NextResponse } from "next/server";
import main from "@/utils/gemini/gemini";
import arcjet, { tokenBucket } from "@arcjet/next";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["userId"],
  rules: [
    tokenBucket({
      mode: "LIVE",
      refillRate: 5,
      interval: 10,
      capacity: 10,
    }),
  ],
});

export async function POST(request) {
  try {
    const { title, user_id } = await request.json();
    if (!title || !user_id) {
      throw new Error("Incomplete fields");
    }
    const userId = user_id;
    const decision = await aj.protect(request, { userId, requested: 5 });
    console.log("Arcjet decision", decision);

    if (decision.isDenied()) {
      return NextResponse.json(
        { error: "Too Many Requests", reason: decision.reason },
        { status: 429 }
      );
    }
    const response = await main(title);
    return NextResponse.json(
      {
        description: response,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(`error generating ai response, error: ${error}`);
    return NextResponse.json(
      {
        message: `internal server error, error: ${error}`,
      },
      { status: 500 }
    );
  }
}
