import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://sushxnt:Aezakmi%407996@cluster0.ar5fu.mongodb.net/food-delivery"
    )
    .then(() => {
      console.log("DB connected");
    });
};
