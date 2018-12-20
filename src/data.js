const mostrarPropiedad = (data) => {
  let arrayMostrar = [];
  for(let i = 0; i < data.length; i++){
    arrayMostrar.push({id: data[i].id ,name : data[i].name, img: data[i].img});
  }
  return console.log(arrayMostrar);
};

window.pokemon = {
  mostrarPropiedad,
};
/*const containerList = document.getElementById('container-list');
const mostrarPropiedad = (data) => {

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
  return  containerList.innerHTML = templateListOfCards;
*/
