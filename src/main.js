
const containerList = document.getElementById('container-list');

let arrayPokemon = POKEMON.pokemon;
//USANDO EL MAP PARA MOSTRAR LOS NOMBRES DE LOS POKEMONES
let namesPokemon = arrayPokemon.map((x) => x.name);
containerList.innerHTML = namesPokemon;

//ejemplo de objeto para convertirlo en array y llamar su elemto objeto
const objeto = {
    abecedario: [   {nombre:'Sandra', apellido:'Sanchez'}   ]
};
let arrayObjeto = objeto.abecedario;
let nombre = arrayObjeto.map((x) => {return x.apellido});
console.log(nombre);

//imprimiendo los ids y nombres en forma de lista
for(let i = 0 ; i < arrayPokemon.length ; i++){
  let id = arrayPokemon.map((x) => x.id);
  let name = arrayPokemon.map((x) => x.name);

  console.log(id[i]);
  console.log(name[i]);

}
//EJEMPLO DE DANI
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
*/
