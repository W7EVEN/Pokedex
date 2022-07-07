const getPokemonURL = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;

const generatePokemonPromises = () =>
  Array(151)
    .fill()
    .map((_, index) =>
      fetch(getPokemonURL(index + 1)).then((response) => response.json())
    );

const generatePokemonsHTML = (pokemons) =>
  pokemons.reduce((accumulator, { name, id, types }) => {
    const elementTypes = types.map((typeInfo) => typeInfo.type.name);

    accumulator += `

    <div class="box">
    <a href="./pokemon.html?id=${id}" class="pokelink">
         
            <div class="pokeinfo">
              <h2 class="pokename">${id}. ${name}</h2>
              <span class="pokelement">${elementTypes.join(" | ")}</span>
            </div>
            <div class="pokeimagebox">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
                alt="${name}"
                class="pokemon"
              />
            </div>
          </a>
        </div>
        </a>
    `;

    return accumulator;
  }, "");

const insertPokemonsIntoPage = (pokemons) => {
  const div = document.querySelector(".poketainer");
  div.innerHTML = pokemons;
};

const pokemonPromises = generatePokemonPromises();

Promise.all(pokemonPromises)
  .then(generatePokemonsHTML)
  .then(insertPokemonsIntoPage);
