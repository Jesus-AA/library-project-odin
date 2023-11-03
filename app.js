let myLibrary = [];

function Book(title, author, pages) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = false);
  myLibrary.unshift(this);
}

const dialog = document.querySelector('dialog');
const showButton = document.querySelector('.show-dialog');
const closeButton = document.querySelector('.close-dialog');
const bookList = document.querySelector('.books-list');
const form = document.querySelector('.form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');

const deleteBook = (index) => {
  myLibrary.splice(index, 1);
  displayBooks(myLibrary);
};

const bookStatus = (index) => {
  const book = myLibrary[index];
  book.read = !book.read;
  displayBooks(myLibrary);
};

showButton.addEventListener('click', () => {
  dialog.showModal();
});

closeButton.addEventListener('click', () => {
  dialog.close();
});

function displayBooks(listOfBooks) {
  let books = listOfBooks.map((item, index) => {
    return `<li key=${index} class='${
      item.read ? 'book' : null
    }'> <p class='book-title ${item.read ? 'title-color' : null}'>${
      item.title
    }</p>
    <p>By: ${item.author}</p>
    <p>Pages: ${item.pages}</p>
    <div class='card-buttons'>
    <button onclick="deleteBook(${index})" class='delete-button'>Delete</button>
    <button onclick="bookStatus(${index})" class='status-button ${
      item.read ? 'done' : null
    }'>${item.read ? 'Done' : 'TBR'}</button>
    </div>
    </li>`;
  });

  books = books.join('');
  bookList.innerHTML = books;
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const bookTitle = title.value;
  const bookAuthor = author.value;
  const numberOfPages = pages.value;
  new Book(bookTitle, bookAuthor, numberOfPages);
  displayBooks(myLibrary);
});
