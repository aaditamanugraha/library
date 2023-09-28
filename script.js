// array penyimpanan buku
const myLibrary = [];

// object constructor untuk input buku
function Book(author, title, pages) {
  this.author = author;
  this.title = title;
  this.pages = pages;
}

function addBookToLibrary() {
  // mengambil informasi dari user input
  let inputTitle = document.getElementById("title").value;
  let inputAuthor = document.getElementById("author").value;
  let inputPages = document.getElementById("pages").value;

  // menambahkan nilai input ke dalam array
  let newBook = new Book(inputAuthor, inputTitle, inputPages);

  // menambahkan newBook ke dalam array myLibrary
  myLibrary.push(newBook);

  // kosongkan kembali nilai input setelah object constructor ditambahkan
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
}
