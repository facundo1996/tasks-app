import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://0.0.0.0:27017/tasksdb');
    console.log(">>>>> DB is connected")
  } catch (error) {
    console.log(error)
  }
};