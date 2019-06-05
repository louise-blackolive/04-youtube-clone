import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  newFindAndModify: false
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅   Connected to DB");
const handleError = () => console.log(`🚫   Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
