import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/crud");
    console.log(`Connected to MongoDB ${conn.connection.host}`);
  } catch (error) {
    console.log(`MongoDB Connection Error ${error}`);
  }
};
export default connectDB;
