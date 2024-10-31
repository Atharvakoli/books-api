const express = require('express');
const cors = require('cors');
const { getAllBooks, getBookById } = require('./controllers');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('CI/CD piplines HW_3');
});

app.get('/books', async (req, res) => {
  let books = getAllBooks();
  res.status(200).json({ books });
});

app.get('/books/details/:id', async (req, res) => {
  let book = getBookById(parseInt(req.params.id));
  res.status(200).json({ book });
});

module.exports = { app };
