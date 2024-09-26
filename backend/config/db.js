import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
     "mongodb+srv://rezzusharma:rijju7996@cluster0.rxb4x.mongodb.net/FoodFlare"
    )
    .then(() => {
      console.log("DB connected");
    });
};
