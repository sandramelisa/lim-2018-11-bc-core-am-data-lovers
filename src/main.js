const containerList = document.getElementById('container-list');
const btnFiltrar = document.getElementById('btn-filtrar');
const tipoPokemon = document.getElementById('tipo-pokemon');
const arrayPokemon = POKEMON.pokemon;

let funcionData = pokemon.mostrarPropiedad(arrayPokemon);

const crearPlantilla = (data) => {
  let plantilla = '';
  data.forEach((data) => {
    const carta = `
    <div class = "card-link">
    <label class="post-title">${ data.name }</label>
    <img class="post-image" src="${ data.img }" />
    </div>
    `;
    plantilla += carta;
  });
  containerList.innerHTML = plantilla;
};
crearPlantilla(funcionData);
// LLAMANDO FUNCIÓN FILTRAR EN CONSOLA
// console.log(pokemon.filtrarPropiedad(arrayPokemon));

const filtrarTipo = () => {
  alert('probando');
  console.log(pokemon.filtrarPropiedad(arrayPokemon, tipoPokemon.value));
};

btnFiltrar.addEventListener('click', filtrarTipo);
