import mongoose from "mongoose";
const uri ="enter your mongoDB uri here";

export const connectDB = async () => {
  await mongoose
    .connect(
     uri,
    .then(() => {
      console.log("DB connected");
    });
};
