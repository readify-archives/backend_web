import express from 'express';
import cors from 'cors';
import books from './books.json' assert { type: 'json' };
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

// Required for ES module to get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Allow CORS
app.use(cors());

// ✅ Serve static covers
app.use('/covers', express.static(path.join(__dirname, 'covers')));

// ✅ API route
app.get('/api/books', (req, res) => {
  res.json(books);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
