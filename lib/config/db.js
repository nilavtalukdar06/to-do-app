import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Connected to mongodb");
  } catch (error) {
    console.error(`Error connecting to db, error: ${error}`);
  }
};
