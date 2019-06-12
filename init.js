import dotenv from "dotenv";
import "./models/Video";
import "./models/Comment";
import "./models/User";

import "./db";
import app from "./app";

dotenv.config();

const PORT = process.env.PROT || 4000;

const handleListening = () =>
  console.log(`✅   Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
