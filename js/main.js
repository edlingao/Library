
let myLibrary = [];
const counter = [1, 2, 3, 4, 5, 6];

function Book(id, author, tittle, pages, readed) {
  this.id = id;
  this.tittle = tittle;
  this.author = author;
  this.pages = pages;
  this.readed = readed;
  this.info = () => `${this.tittle} by ${this.author}, ${this.pages} pages, is it readed? ${this.readed}`;
}

function readBook(book, readedButton) {
  if (book.readed) {
    book.readed = false;
    readedButton.innerText = 'not readed';
  } else {
    book.readed = true;
    readedButton.innerText = 'readed';
  }
}

function deleteBook(book1) {
  const bookBox = document.querySelector(`#book-${book1.id}`);
  myLibrary = myLibrary.filter(book => book !== book1);

  bookBox.remove();
}

function createBook(book) {
  const div = document.createElement('div');
  const library = document.getElementById('append');
  const tittle = document.createElement('h1');
  const author = document.createElement('h3');
  const pages = document.createElement('h3');
  const readed = document.createElement('button');
  const deleteBookBoxButton = document.createElement('button');

  deleteBookBoxButton.classList.add('close');
  deleteBookBoxButton.innerText = 'X';
  deleteBookBoxButton.addEventListener('click', () => {
    deleteBook(book);
  });
  readed.id = `readed-${book.id}`;
  readed.addEventListener('click', () => {
    readBook(book, readed);
  });
  if (book.readed === true) readed.innerText = 'readed';
  else readed.innerText = 'not readed';

  div.className = 'book';
  div.id = `book-${book.id}`;
  tittle.innerHTML = book.tittle;
  author.innerHTML = book.author;
  pages.innerHTML = book.pages;
  div.appendChild(tittle);
  div.appendChild(author);
  div.appendChild(pages);
  div.appendChild(readed);
  div.appendChild(deleteBookBoxButton);
  library.appendChild(div);
}
function existsID(id) {
  const exists = myLibrary.some(book => book.id === id);
  return exists ? existsID(id + 1) : id;
}
function createObjectBook(id, title, author, pages, readed) {
  const book1 = new Book(id, author, title, pages, readed);
  book1.id = existsID(book1.id);
  myLibrary.push(book1);
  createBook(book1);
}

function showBoxes(arr) {
  arr.forEach((book) => {
    createBook(book);
  });
}
function showHide(show = false) {
  const form = document.querySelector('#form');
  if (show) {
    form.classList.remove('hide');
    form.classList.add('fade');
  } else {
    form.classList.add('hide');
    form.classList.remove('fade');
  }
}

function main() {
  counter.forEach((count) => {
    const book = new Book(myLibrary.length, count, count, count, false);
    myLibrary.push(book);
  });
  const book1 = new Book(myLibrary.length, 'edlingao', 'Etterium', 65, true);
  myLibrary.push(book1);
  showBoxes(myLibrary);


  const addBookButton = document.querySelector('#register-book');
  const closeButton = document.querySelector('#close');
  const showButton = document.querySelector('#add');


  addBookButton.addEventListener('click', () => {
    const id = myLibrary.length;
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const readed = document.querySelector('#readed').checked;

    createObjectBook(id, title, author, pages, readed);
    showHide();
  });
  closeButton.addEventListener('click', () => {
    showHide();
  });
  showButton.addEventListener('click', () => {
    showHide(true);
  });
}
main();
