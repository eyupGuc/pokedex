const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#d6b3ff",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
  ice: "#e0f5ff ",
};

const pokeFetch = async (number) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${number}`;
  const res = await fetch(url);

  const data = await res.json();
  //   console.log(data);
  //   console.log(data.types[0].type.name);
  //   console.log(data.id);
  updateDOM(data);

  //   <img
  //     src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  //     alt="Bulbasaur"
  //   ></img>;
};
const numbers = () => {
  for (let i = 100; i < 300; i++) {
    console.log(i);
    pokeFetch(i);
  }
};
numbers();

const updateDOM = (poke) => {
  const rowDiv = document.querySelector(".row");
  //   console.log(rowDiv);

  const type = poke.types[0].type.name;
  const color = colors[type];

  rowDiv.innerHTML += `<div class="card text-center " style="width: 18rem; background:${color}">
  <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${
    poke.id
  }.png" class="card-img-top" alt="...">
  <div class="card-body ">
    <h2 class="card-text ">${poke.name.toUpperCase()}</h2>
    <p> Weight: ${poke.weight} Kg</p>
    <p> Height: ${(poke.height / 3.2808399).toFixed(2)} M</p>
    <p> Type: ${poke.types[0].type.name} </p>

  </div>
</div>`;
};

pokeFetch();
