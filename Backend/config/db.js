import mongoose from "mongoose";

const ConnectDb = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("db is connected");
  } catch (error) {
    console.log("connection is failed !");
  }
};

export default ConnectDb;
