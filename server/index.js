const express = require("express");
const port = 5000;
const dataService = require("./dataService");
const dummyData = require("./src/helpers/dummyDataInit");
const cors = require("cors");

const app = express();
app.use(cors());
dummyData.init();

app.get("/books", (req, res) => {
  let books = dataService.getAll("books");

  res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
  let book = dataService.find("books", req.params.id);

  book ? res.json(book) : res.sendStatus(404);
});

app.get("/authors", (req, res) => {
  let authors = dataService.getAll("authors");

  res.status(200).json(authors);
});

app.get("/authors/:id", (req, res) => {
  let author = dataService.find("authors", req.params.id);

  author ? res.json(author) : res.sendStatus(404);
});

app.get("/", (req, res) => {
  // const { author, title } = req.query;
  const books = dataService.getAll("books");

  let filteredData = books;

  // if (title) {
  //   filteredData = filteredData.filter((book) =>
  //     book.title.toLowerCase().includes(title.toLowerCase())
  //   );
  // }

  // if (author) {
  //   filteredData = filteredData.filter((book) =>
  //     book.autor.toLowerCase().includes(author.toLowerCase())
  //   );
  // }

  const searchTerm = req.query.search;
  console.log("Recieved query parameters", searchTerm);

  // filteredData = filteredData.filter(
  //   (book) =>
  //     book.title.toLowerCase().includes(searchTerm) ||
  //     book.autor.toLowerCase().includes(searchTerm)
  // );

  filteredData = filteredData.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm) ||
      book.autor.toLowerCase().includes(searchTerm)
  );

  res.json(filteredData);
});

// app.post("/books", (req, res) => {
//   res.send("Got a post request");
//   // const category = dataService.create("categories", req.body);

//   // res.status(200).json(category);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
