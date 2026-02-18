const books = [
  {
    title: 'Il Signore degli Anelli',
    authorName: 'J.R.R. Tolkien',
    releaseYear: 1954,
  },
  {
    title: 'Il Grande Gatsby',
    authorName: 'F. Scott Fitzgerald',
    releaseYear: 1925,
  },
  { title: '1984', authorName: 'George Orwell', releaseYear: 1949 },
  { title: 'Lo Hobbit', authorName: 'J.R.R. Tolkien', releaseYear: 1937 },
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

const filteredBooks = books.filter((book) => book.releaseYear <= 1950);

filteredBooks.sort(sortByYear);
