const addInput = document.querySelector(".add__input");
const addBtn = document.querySelector(".add__btn");

addBtn.addEventListener("click", (e) => {
  addInput.classList.toggle("show");
  addBtn.classList.toggle("rotate");
});
