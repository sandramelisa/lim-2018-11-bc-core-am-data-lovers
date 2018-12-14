
const containerList = document.getElementById('container-list');

let arrayPokemon = POKEMON.pokemon;

const crearTemplateDePokemon = (data) => {
  let templateListOfPokemon = '';
  // recorremos nuestro array con forEach
  data.forEach((arrayPokemon) => {
    // creamos un template(string) por cada elemento del array
    const pokemon = `
      <div class="pokemon-link">
        <article class="blog-card">
          <img class="post-image" src="${ arrayPokemon.img }" />
          <div class="article-details">
            <h4 class="post-category">${ arrayPokemon.id }</h4>
            <h3 class="post-title">${ arrayPokemon.name }</h3>
            <p class="post-description">
              Número ${ arrayPokemon.num }
            </p>
            <p class="post-author">Actor ${ arrayPokemon.candy }</p>
          </div>
        </article>
      </div>
    `;
    // vamos concatenando cada li
    templateListOfPokemon += pokemon;
  })
  containerList.innerHTML = templateListOfPokemon;
}

// ejecuntado funciona para pintar la data en mi html
crearTemplateDePokemon(arrayPokemon)
