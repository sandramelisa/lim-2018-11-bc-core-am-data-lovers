 // esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
/*
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
        <article class="blog-card">
          <img class="post-image" src="${ personaje.img }" />
          <div class="article-details">
            <h4 class="post-category">${ personaje.id }</h4>
            <h3 class="post-title">${ personaje.name }</h3>
            <p class="post-description">
              Probabilidad ${ personaje.avg_spawns}
            </p>
            <p class="post-author">Debilidades ${ personaje.weaknesses }</p>
          </div>
        </article>
      </div>
    `;
    // vamos concatenando cada li
    templateListOfCards += card;
  })
  containerList.innerHTML = templateListOfCards;
}

// ejecuntado funciona para pintar la data en mi html
crearTemplateDeCard(POKEMON.pokemon)
