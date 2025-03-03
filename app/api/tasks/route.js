import { connectDb } from "@/lib/config/db";
import { taskModel } from "@/lib/models/task";
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

export async function POST(request) {
  const { title, description } = await request.json();
  try {
    await taskModel.create({
      title,
      description,
    });
    console.log("Data created successfully");
  } catch (error) {
    console.error(`Error creating data, error: ${error}`);
    return NextResponse.json({
      msg: "Failed to create data",
    });
  }
  return NextResponse.json({
    msg: "Task is created successfully",
  });
}
