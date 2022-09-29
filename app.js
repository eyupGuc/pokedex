const pokeFetch = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon/ditto";
  const res = await fetch(url);

  const data = await res.json();
  console.log(data);
  console.log(data.name);
  console.log(data.weight);
  console.log(first);
};
pokeFetch();
