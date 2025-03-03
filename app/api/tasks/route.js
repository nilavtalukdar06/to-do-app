import { connectDb } from "@/lib/config/db";
import { taskModel } from "@/lib/models/task";
import { NextResponse } from "next/server";

const loadDb = async () => {
  try {
    await connectDb();
  } catch (error) {
    console.error("Database connection failed:", error);
    throw new Error("Database connection failed");
  }
};

loadDb();

export async function GET() {
  try {
    const data = await taskModel.find({});
    return NextResponse.json({
      tasks: data,
    });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return NextResponse.json(
      {
        msg: "Failed to fetch tasks",
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const { title, description } = await request.json();
  try {
    await taskModel.create({
      title,
      description,
    });
    console.log("Data created successfully");
    return NextResponse.json({
      msg: "Task is created successfully",
    });
  } catch (error) {
    console.error(`Error creating data, error: ${error}`);
    return NextResponse.json(
      {
        msg: "Failed to create data",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  const { documentId } = await request.json();
  try {
    await taskModel.deleteOne({ _id: documentId });
    return NextResponse.json({
      msg: "Task removed successfully",
    });
  } catch (error) {
    console.error(`Error removing data, error: ${error}`);
    return NextResponse.json(
      {
        msg: "Failed to remove data",
      },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  const { documentId } = await request.json();
  try {
    await taskModel.updateOne({ _id: documentId }, { $set: { status: true } });
    return NextResponse.json({
      msg: "Updated status",
    });
  } catch (error) {
    console.error(`Error updating status, error: ${error}`);
    return NextResponse.json(
      {
        msg: "Error updating status",
      },
      { status: 500 }
    );
  }
}
