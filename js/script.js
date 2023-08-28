const list = document.querySelector(".todos__list");
const addInput = document.querySelector(".add__input");
const addBtn = document.querySelector(".add__btn");
const modal = document.querySelector(".modal");
const modalForm = document.querySelector(".modal-form");
const todosSearch = document.querySelector(".todos__search");

let todos = [
  {
    id: 1,
    todo: "this morning's meeting, we have to improve the quality of office facilities and another...",
    date: "28/10/2012",
  },
  {
    id: 2,
    todo: "need for this month: -clothes -snack...",
    date: "28/10/2012",
  },
  {
    id: 3,
    todo: "Message from Liam: Don't forget to complete assignments on Tuesday",
    date: "28/10/2012",
  },
];

function renderTodos(array) {
  list.innerHTML = "";
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
    itemEdit.dataset.id = element.id;

    const itemDelete = document.createElement("span");
    itemDelete.classList.add("item__delete");
    itemDelete.dataset.id = element.id;

    itemInner.append(itemEdit, itemDelete);
    itemWrapper.append(itemDate, itemInner);
    li.append(todo, itemWrapper);

    list.append(li);
  });
}

addBtn.addEventListener("click", (e) => {
  addInput.classList.toggle("show");
  addBtn.classList.toggle("rotate");
  modal.classList.toggle("no-display");
});

renderTodos(todos);

modalForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const addInputValue = addInput.value.trim();

  const date = new Date();
  const day = date.getDate();
  const month = (date.getMonth() + 1).toString().padStart("2", "0");
  const year = date.getFullYear();

  const today = `${day}/${month}/${year}`;

  const newTodo = {
    id: todos.length ? todos.length + 1 : 1,
    todo: addInputValue,
    date: today,
  };

  todos.push(newTodo);
  renderTodos(todos);
  addInput.classList.toggle("show");
  addBtn.classList.toggle("rotate");
  modal.classList.toggle("no-display");

  addInput.value = "";
});

list.addEventListener("click", (e) => {
  if (e.target.matches(".item__delete")) {
    const deleteId = e.target.dataset.id;
    const foundObject = todos.findIndex((item) => {
      return (item.id = deleteId);
    });
    todos.splice(foundObject, 1);
    renderTodos(todos);
  }

  if (e.target.matches(".item__edit")) {
    let editValue = prompt("Enter your edit value");

    const edit = e.target.dataset.id;

    const foundItem = todos.find((element) => {
      return element.id == edit;
    });
    foundItem.todo = editValue;
    renderTodos(todos);
  }
});

todosSearch.addEventListener("keyup", (e) => {
  list.innerHTML = "";

  const todosSearchValue = todosSearch.value.trim().toLowerCase();

  const searchValue = todos.filter((element) => {
    const searchName = element.todo.toLowerCase();
    return searchName.includes(todosSearchValue);
  });

  renderTodos(searchValue);
});
