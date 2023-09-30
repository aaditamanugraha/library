// array penyimpanan buku
let myLibrary = [];

// object constructor untuk input buku
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function showBookList() {
  let containerBookList = document.getElementById("library");
  containerBookList.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];

    // buku container
    let divElement = document.createElement("div");
    divElement.classList.add("book-container");

    // judul buku
    let titleElement = document.createElement("h3");
    titleElement.textContent = book.title;

    // penulis dan pages
    let authorElement = document.createElement("p");
    authorElement.textContent = "Author: " + book.author;

    let pagesElement = document.createElement("P");
    pagesElement.textContent = book.pages + " pages";

    // tombol delete
    let deleteBookButton = document.createElement("button");
    deleteBookButton.classList.add("delete-button");
    deleteBookButton.textContent = "Delete";
    deleteBookButton.onclick = function () {
      deleteBook(i);
    };

    // menambahkan element yang sudah dibuat ke dalam HTML
    divElement.appendChild(titleElement);
    divElement.appendChild(authorElement);
    divElement.appendChild(pagesElement);
    divElement.appendChild(deleteBookButton);

    // menambahkan book-container ke dalam container
    containerBookList.appendChild(divElement);
  }
}

function saveDataToLocalStorage() {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function loadDataFromLocalStorage() {
  let data = localStorage.getItem("myLibrary");
  if (data) {
    myLibrary = JSON.parse(data);
    showBookList();
  }
}

window.onload = loadDataFromLocalStorage();

function addBookToLibrary() {
  // mengambil informasi dari user input
  let inputTitle = document.getElementById("title").value;
  let inputAuthor = document.getElementById("author").value;
  let inputPages = document.getElementById("pages").value;

  // validasi user input tidak boleh ada yg kosong
  if (!inputTitle || !inputAuthor || !inputPages) {
    alert("Please insert all the input required!");
    return;
  }

  // menambahkan nilai input ke dalam array
  let newBook = new Book(inputTitle, inputAuthor, inputPages);

  // menambahkan newBook ke dalam array myLibrary
  myLibrary.push(newBook);

  // kosongkan kembali nilai input setelah object constructor ditambahkan
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";

  saveDataToLocalStorage();

  showBookList();
}

// menghapus buku
function deleteBook(index) {
  if (confirm("Are you sure want to delete this book?")) {
    myLibrary.splice(index, 1);
    saveDataToLocalStorage();
    showBookList();
  }
}
