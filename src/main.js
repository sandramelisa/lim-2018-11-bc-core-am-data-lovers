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

  if(tipoPokemon.value === 'Fire'){
    alert('probandoFuego');
    console.log(pokemon.filtrarPropiedad(arrayPokemon));
  }else if (tipoPokemon.value === 'Water'){
    alert('probandoAgua');
    console.log(pokemon.filtrarPropiedad(arrayPokemon));
  }else if (tipoPokemon.value === 'Bug'){
    alert('probandoBicho');
    console.log(pokemon.filtrarPropiedad(arrayPokemon));
  }else if (tipoPokemon.value === 'Electric'){
    alert('probandoEléctrico');
    console.log(pokemon.filtrarPropiedad(arrayPokemon));
  }else{
    alert('check');
  }
}
btnFiltrar.addEventListener('click', filtrarTipo);
