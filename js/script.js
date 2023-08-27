const list = document.querySelector(".todos__list");
const addInput = document.querySelector(".add__input");
const addBtn = document.querySelector(".add__btn");

let todos = [
  {
    id: 1,
    todo: "Wake up early",
    date: "28/10/2012",
  },
  {
    id: 2,
    todo: "Morning workout",
    date: "28/10/2012",
  },
  {
    id: 3,
    todo: "Take a shower",
    date: "28/10/2012",
  },
];

function renderTodos(array) {
  array.forEach((element) => {
    const li = document.createElement("li");
    li.classList.add("todos__item");

    const todo = document.createElement("p");
    todo.classList.add("item__text");
    todo.textContent = element.todo;

    const itemWrapper = document.createElement("div");
    itemWrapper.classList.add("item__wrapper");

    const itemDate = document.createElement("span");
    itemDate.classList.add("item__date");
    itemDate.textContent = element.date;

    const itemInner = document.createElement("div");
    itemInner.classList.add("item__inner");

    const itemEdit = document.createElement("span");
    itemEdit.classList.add("item__edit");

    const itemDelete = document.createElement("span");
    itemDelete.classList.add("item__delete");

    itemInner.append(itemEdit, itemDelete);
    itemWrapper.append(itemDate, itemInner);
    li.append(todo, itemWrapper);

    list.append(li);
  });
}

addBtn.addEventListener("click", (e) => {
  addInput.classList.toggle("show");
  addBtn.classList.toggle("rotate");
});

renderTodos(todos);
