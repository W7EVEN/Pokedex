const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const pokemonid = urlParams.get("id");

const pokemonName = document.querySelector(".poketitle");
const pokemonImage = document.querySelector(".pokeimage");
const pokemonHp = document.querySelector(".pokehp");
const pokemonAtk = document.querySelector(".pokeatk");
const pokemonDef = document.querySelector(".pokedef");
const pokemonSpecialAtk = document.querySelector(".pokespatk");
const pokemonSpecialDef = document.querySelector(".pokespdef");
const pokemonSpeed = document.querySelector(".pokespeed");

const getPokemonURL = `https://pokeapi.co/api/v2/pokemon/${pokemonid}`;

const fillPokemonData = (pokemon) => {
  pokemonName.innerText = pokemon.name.replace(/\w\S*/g, (w) =>
    w.replace(/^\w/, (c) => c.toUpperCase())
  );
  pokemonImage.src = pokemon.sprites.other["official-artwork"].front_default;
  pokemonHp.innerText = pokemon.stats[0].base_stat;
  pokemonAtk.innerText = pokemon.stats[1].base_stat;
  pokemonDef.innerText = pokemon.stats[2].base_stat;
  pokemonSpecialAtk.innerText = pokemon.stats[3].base_stat;
  pokemonSpecialDef.innerText = pokemon.stats[4].base_stat;
  pokemonSpeed.innerText = pokemon.stats[5].base_stat;
};

const generatePokemonPromises = () => {
  fetch(getPokemonURL)
    .then((response) => response.json())
    .then((pokemon) => {
      fillPokemonData(pokemon);
    });
};

generatePokemonPromises();

// const fetchPokemonDetails = (pokemons) => {
//   pokemons.reduce((accumulator, { stats }) => {
//     const hpStat = stats.map((HP) => HP.stat.name);

//     pokemonName = hpStat;
//   }, "");
// };

// fetchPokemonDetails();
