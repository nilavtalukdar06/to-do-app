import mongoose from "mongoose";

const { Schema, model, models } = mongoose;
const taskSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const taskModel = models.taskModel || model("taskModel", taskSchema);
