// Add book modal
const addBookBtn = document.querySelector("#header .addBookBtn");
const modal = document.querySelector("#main .modalBg");
const cancelbtn = document.querySelector("#main .modalBg .actionBtn .cancel");

addBookBtn.addEventListener("click", toggleModal);
cancelbtn.addEventListener("click", toggleModal);

function toggleModal(){
  modal.classList.toggle("show");
}