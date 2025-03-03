import { connectDb } from "@/lib/config/db";
import { taskModel } from "@/lib/models/task";
import { NextResponse } from "next/server";

const loadDb = async () => {
  connectDb();
};

loadDb();

export async function GET() {
  const data = await taskModel.find({});
  return NextResponse.json({
    tasks: data,
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

export async function DELETE(request) {
  const { documentId } = await request.json();
  try {
    await taskModel.deleteOne({ _id: documentId });
  } catch (error) {
    console.error(`Error removing data, error: ${error}`);
    return NextResponse.json({
      msg: "Failed to remove data",
    });
  }

  return NextResponse.json({
    msg: "Task removed successfully",
  });
}

export async function PUT(request) {
  const { documentId } = await request.json();
  try {
    await taskModel.updateOne({ _id: documentId }, { $set: { status: true } });
  } catch (error) {
    console.error(`Error updating status, error: ${error}`);
    return NextResponse.json({
      msg: "Error updating status",
    });
  }

  return NextResponse.json({
    msg: "Updated status",
  });
}
