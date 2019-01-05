const containerList = document.getElementById('container-list');
const btnFiltrar = document.getElementById('btn-filtrar');
const btnOrdenar = document.getElementById('btn-ordenar')
const tipoPokemon = document.getElementById('tipo-pokemon');
const ordenPokemon = document.getElementById('orden-pokemon');
const arrayPokemon = POKEMON.pokemon;

const arrayMostrado = pokemon.mostrarPropiedad(arrayPokemon);

const crearPlantilla = (data) => {
  let plantilla = '';
  data.forEach((data) => {
    let carta = `
    <div class = "card-link">
    <label class="name">${ data.name }</label>
    <img class="image" src="${ data.img }" />
    </div>
    `;
    plantilla += carta;
  });
  containerList.innerHTML = plantilla;
};
crearPlantilla(arrayMostrado);

const filtrarTipo = () => {
    const arrayFiltrado = pokemon.filtrarPropiedad(arrayPokemon, tipoPokemon.value);
    crearPlantilla(arrayFiltrado);
};

const ordenarPokemon = () => {
  const arrayOrdenado = pokemon.ordenarPropiedad(arrayPokemon, tipoPokemon.value);
  if (ordenPokemon.value === 'Az') {
    crearPlantilla(arrayOrdenado);
  }
  if (ordenPokemon.value === 'Za') {
    crearPlantilla(arrayOrdenado.reverse());
  }
}

btnFiltrar.addEventListener('click', filtrarTipo);
btnOrdenar.addEventListener('click', ordenarPokemon);
