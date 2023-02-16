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
  const radioValue = document.getElementsByName("readingStatus");
  let readingStatus = undefined;
  for(let i = 0; i< radioValue.length; i++){
    if(radioValue[i].checked){
       readingStatus = radioValue[i].value;
      }
   }


  const newBook = new Book(bookName, authorName, pages, readingStatus);
  library.push(newBook);
  refreshLibraryContent();
}



function refreshLibraryContent(){
  bookList.innerHTML = '';
  for(book of library){
  book.createCard();
  }
}


function Book(name, authorName, pages, readingStatus){
  this.name = name;
  this.authorName = authorName;
  this.pages = pages;
  this.readingStatus = readingStatus;



  this.createCard = function(){

    const card = document.createElement('div');
    card.classList = 'book';

    // read radio
    this.read = document.createElement('input');
    this.read.setAttribute('name', `${library.indexOf(this)}readingStatus`)
    this.read.setAttribute('type', 'radio');
    this.read.id = `${library.indexOf(this)}read`;
    
    // not read radio
    this.notRead = document.createElement('input');
    this.notRead.setAttribute('name', `${library.indexOf(this)}readingStatus`)
    this.notRead.setAttribute('type', 'radio');
    this.notRead.id  = `${library.indexOf(this)}not-read`;
    
    // remove button
    this.removeBtn = document.createElement('button');
    this.removeBtn.classList = "btn-rem";
    this.removeBtn.textContent = "Remove";


    const cardContent = `
        <p class="bookName">${name}</p>
        <p class="author">~By <span>${authorName}</span></p>
        <p class="pages"><span>${pages}</span> pages</p>
        <div class="status">
        <div class="read-group">
         
          <label for="${library.indexOf(this)}read">Read</label>
        </div>
        <div class="notRead-group">
          
          <label for="${library.indexOf(this)}not-read">Not Read</label>
        </div>
        </div>
    `;
  
    
    
    card.innerHTML = cardContent;


    // implement read status in card and book object
    card.querySelector(".read-group").insertBefore(this.read, card.querySelector(".read-group label"));
    card.querySelector(".notRead-group").insertBefore(this.notRead, card.querySelector(".notRead-group label"));


    this.read.addEventListener("click", ()=>{
      this.readingStatus = "read"
    })
    this.notRead.addEventListener("click", ()=>{
      this.readingStatus = "not-read"
    })

    if(this.readingStatus == "read"){
      this.read.checked = true;
    } else {
      this.notRead.checked = true;
    }


    // implement remove button for book card
    card.appendChild(this.removeBtn);
    bookList.appendChild(card);
    
      this.removeBtn.addEventListener("click", ()=>{
        library.splice(library.indexOf(this), 1);
        refreshLibraryContent();
      })
  }

}

