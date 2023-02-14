const library = [];


// Add book modal
const addBookBtn = document.querySelector("#header .addBookBtn");
const modal = document.querySelector("#main .modalBg");
const cancelBtn = document.querySelector("#main .modalBg .actionBtn .cancel");
const submitBtn = document.querySelector("#main .modalBg .actionBtn .submit")

addBookBtn.addEventListener("click", toggleModal);
cancelBtn.addEventListener("click", toggleModal);
submitBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  addBook();
  modal.classList.toggle("show");
});

function toggleModal(){
  modal.classList.toggle("show");
}

// book details


function addBook(){
  const bookName = document.querySelector("#main .modalBg .addBookForm .bookNameInp").value;
  const authorName = document.querySelector("#main .modalBg .addBookForm .authorNameInp").value;
  const pages = document.querySelector("#main .modalBg .addBookForm .pagesInp").value;

  const newBook = new book(bookName, authorName, pages);
  library.push(newBook);
}


function book(name, authorName, pages){
  this.name = name;
  this.authorName = authorName;
  this.pages = pages;

  this.remove = function(){
    library.splice(library.indexOf(this), 1);
  }
}