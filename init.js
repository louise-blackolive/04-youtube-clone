import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PROT || 4000;

const handleListening = () =>
  console.log(`✅   Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
