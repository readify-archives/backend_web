import fs from "fs";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const books = JSON.parse(fs.readFileSync("./books.json", "utf-8"));

const app = express();
app.use(cors());
app.use("/covers", express.static(path.join(__dirname, "../covers")));

app.get("/books", (req, res) => res.json(books));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));