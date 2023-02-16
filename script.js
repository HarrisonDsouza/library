const library = [];
const bookList = document.querySelector("#main .bookList");



// Add book modal
const addBookBtn = document.querySelector("#header .addBookBtn");
const modal = document.querySelector("#main .modalBg");
const cancelBtn = document.querySelector("#main .modalBg .actionBtn .cancel");
const submitBtn = document.querySelector("#main .modalBg .actionBtn .submit");


addBookBtn.addEventListener("click", toggleModal);
cancelBtn.addEventListener("click", (e) =>{
  e.preventDefault();
  toggleModal();
});
submitBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  addBook();
  toggleModal();
});

function toggleModal(){
  modal.classList.toggle("show");
}


// book details


function addBook(){
  const bookName = document.querySelector("#main .modalBg .addBookForm .bookNameInp").value;
  const authorName = document.querySelector("#main .modalBg .addBookForm .authorNameInp").value;
  const pages = document.querySelector("#main .modalBg .addBookForm .pagesInp").value;

  const newBook = new Book(bookName, authorName, pages);
  library.push(newBook);
  refreshLibraryContent();
}




function refreshLibraryContent(){
  bookList.innerHTML = '';
  for(book of library){
  book.createCard();
  }
}


function Book(name, authorName, pages){
  this.name = name;
  this.authorName = authorName;
  this.pages = pages;



  this.createCard = function(){

    const card = document.createElement('div');
    card.classList = 'book';
    
    this.removeBtn = document.createElement('button');
    this.removeBtn.classList = "btn-rem";
    this.removeBtn.textContent = "Remove";
    const cardContent = `
        <p class="bookName">${name}</p>
        <p class="author">~By <span>${authorName}</span></p>
        <p class="pages"><span>${pages}</span> pages</p>
        <div class="status">
          <input type="radio" id="read" name="readingStatus" value="read />
          <label for="read">Read</label>
          <input type="radio" id="not-read" name="readingStatus" value="not-read />
          <label for="not-read>Not Read</label>
        </div>
    `;
  
    
    card.innerHTML = cardContent;
    card.appendChild(this.removeBtn);
    bookList.appendChild(card);
    
      this.removeBtn.addEventListener("click", ()=>{
        library.splice(library.indexOf(this), 1);
        refreshLibraryContent();
      })
  }

}
// book layout

  //  book card

  





// function createBookCard(title, authorName, pages, removeBtn){
//   const card = document.createElement('div');
//   card.classList = 'book';

//   const cardContent = `
//       <p class="bookName">${title}</p>
//       <p class="author">~By <span>${authorName}</span></p>
//       <p class="pages"><span>${pages}</span> pages</p>
//       <div class="status">
//         <input type="radio" id="read" name="readingStatus" value="read />
//         <label for="read">Read</label>
//         <input type="radio" id="not-read" name="readingStatus" value="not-read />
//         <label for="not-read>Not Read</label>
//       </div>
//   `;

//   card.appendChild(removeBtn);

//   card.innerHTML = cardContent;
//   bookList.appendChild(card);
// }

