const pokeFetch = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon/ditto";
  const res = await fetch(url);

  const data = await res.json();
  console.log(data);
  console.log(data.types[0].type.name);
  console.log(data.id);
  updateDOM(data);

  //   <img
  //     src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  //     alt="Bulbasaur"
  //   ></img>;
};

const updateDOM = (poke) => {
  const rowDiv = document.querySelector(".row");
  //   console.log(rowDiv);

  rowDiv.innerHTML += `<div class="card text-center" style="width: 18rem;">
  <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" class="card-img-top" alt="...">
  <div class="card-body ">
    <h2 class="card-text ">${poke.name.toUpperCase()}</h2>
    <p> Weight: ${poke.weight} Kg</p>
    <p> Height: ${(poke.height / 3.2808399).toFixed(2)} M</p>
    <p> Type: ${poke.types[0].type.name} </p>

  </div>
</div>`;
};

pokeFetch();
