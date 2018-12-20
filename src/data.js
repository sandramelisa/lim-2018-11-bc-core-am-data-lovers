 // esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

var example = () => {
  return 'example';
};

window.example = example;


let arrayPokemon = POKEMON.pokemon;
const containerList = document.getElementById('container-list');

const crearTemplateDeCard = (data) => {
  let templateListOfCards = '';
  // recorremos nuestro array con forEach
  data.forEach((personaje) => {
    // creamos un template(string) por cada elemento del array
    const card = `
            <div class="card-link">

            <label class="post-title">${ personaje.name }</label>
            <img class="post-image" src="${ personaje.img }" />

  
            </div>
    `;
    // vamos concatenando cada li
    templateListOfCards += card;
  })
  containerList.innerHTML = templateListOfCards;
}

// ejecuntado funciona para pintar la data en mi html
crearTemplateDeCard(POKEMON.pokemon)
