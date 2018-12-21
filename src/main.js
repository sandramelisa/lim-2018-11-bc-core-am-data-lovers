const containerList = document.getElementById('container-list');

const arrayPokemon = POKEMON.pokemon;

let funcionData = pokemon.mostrarPropiedad(arrayPokemon);

const crearPlantilla = (data) => {
  let plantilla = '';
  data.forEach((funcionData) => {
    const carta = `
    <div class = "card-link">
    ${funcionData.name}
    <img class="post-image" src="${ funcionData.img }" />
    </div>
    `;
    plantilla += carta;
  });
  containerList.innerHTML = plantilla;
};
crearPlantilla(funcionData);
