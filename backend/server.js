import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// For ES Modules support
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read JSON data
const books = JSON.parse(fs.readFileSync(path.join(__dirname, 'books.json'), 'utf-8'));

const app = express();
const PORT = process.env.PORT || 3000;

// CORS for frontend access
app.use(cors());

// Serve covers statically
app.use('/covers', express.static(path.join(__dirname, 'covers')));

// API route to return books
app.get('/api/books', (req, res) => {
  res.json(books);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
