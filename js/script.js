const pokemonList = document.querySelector(".pokemon__list");
const pokemonSearch = document.querySelector(".pokemon__search");

const renderPokemon = function (array) {
  array.forEach((item) => {
    const pokemonItem = document.createElement("li");
    pokemonItem.classList.add("pokemon__item");

    const itemImg = document.createElement("img");
    itemImg.classList.add("item__img");
    itemImg.setAttribute("alt", item.name);
    itemImg.setAttribute("src", item.img);
    itemImg.setAttribute("type", "button");
    itemImg.setAttribute("data-bs-toggle", "modal");
    itemImg.setAttribute("data-bs-target", "#exampleModal");
    itemImg.dataset.id = item.id;

    const itemTextbox = document.createElement("div");
    itemTextbox.classList.add("item__textbox");

    const itemTitle = document.createElement("p");
    itemTitle.classList.add("item__title");
    itemTitle.textContent = item.name;

    const itemType = document.createElement("p");
    itemType.classList.add("item__type");
    itemType.textContent = item.type[0];

    itemTextbox.append(itemTitle, itemType);

    pokemonItem.append(itemImg, itemTextbox);

    pokemonList.append(pokemonItem);
  });
};

renderPokemon(pokemons);

pokemonSearch.addEventListener("keyup", (e) => {
  pokemonList.innerHTML = "";
  const pokemonSearchValue = pokemonSearch.value.trim().toLowerCase();

  const searchValue = pokemons.filter((element) => {
    const searchName = element.name.toLowerCase();
    return searchName.includes(pokemonSearchValue);
  });

  renderPokemon(searchValue);
});

const modalTitle = document.querySelector(".modal-title");
const modalHeight = document.querySelector(".modal-height");
const modalWeight = document.querySelector(".modal-weight");
const modalSpawnTime = document.querySelector(".modal-spawnTime");
const modalMultiplier = document.querySelector(".modal-multiplier");

pokemonList.addEventListener("click", (e) => {
  if (e.target.matches(".item__img")) {
    const btnId = e.target.dataset.id;

    const foundPokemons = pokemons.find((item) => item.id == btnId);

    modalTitle.textContent = `Weaknessess: ${foundPokemons.weaknesses[0]}`;
    modalHeight.textContent = `Height: ${foundPokemons.height}`;
    modalWeight.textContent = `Weight: ${foundPokemons.weight}`;
    modalSpawnTime.textContent = `Spawn time: ${foundPokemons.spawn_time}`;
    modalMultiplier.textContent = `Multipliers: ${foundPokemons.multipliers}`;
  }
});
