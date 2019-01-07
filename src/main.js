const containerList = document.getElementById('container-list');
const btnFiltrar = document.getElementById('btn-filtrar');
const btnOrdenar = document.getElementById('btn-ordenar');
const btnCalcular = document.getElementById('btn-calcular');
const tipoPokemon = document.getElementById('tipo-pokemon');
const ordenPokemon = document.getElementById('orden-pokemon');
const tipoHuevo = document.getElementById('tipo-huevo');
const arrayPokemon = POKEMON.pokemon;

const arrayVacio = [];
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
  if(tipoPokemon.value === 'Selected') {
    crearPlantilla(arrayMostrado);
  }
};

const ordenarPokemon = () => {
  const arrayOrdenado = pokemon.ordenarPropiedad(arrayPokemon, tipoPokemon.value);
  if (ordenPokemon.value === 'Az') {
    crearPlantilla(arrayOrdenado);
  }
  if (ordenPokemon.value === 'Za') {
    crearPlantilla(arrayOrdenado.reverse());
  }
};

const calcularHuevo = () => {
  crearPlantilla(arrayVacio);
  const cantidadHuevo = pokemon.calcularPropiedad(arrayPokemon, tipoHuevo.value)
  document.getElementById('cantidad-huevos').innerHTML = `La cantidad de pokemon que requiere que camines ${tipoHuevo.value} son ${cantidadHuevo}`
};

btnFiltrar.addEventListener('click', filtrarTipo);
btnOrdenar.addEventListener('click', ordenarPokemon);
btnCalcular.addEventListener('click', calcularHuevo);
