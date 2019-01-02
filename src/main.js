const containerList = document.getElementById('container-list');
const btnFiltrar = document.getElementById('btn-filtrar');
const tipoPokemon = document.getElementById('tipo-pokemon');
const arrayPokemon = POKEMON.pokemon;
// const arrayPrueba = [{name: 'Inuyasha', img: 'https://staticr1.blastingcdn.com/media/photogallery/2018/2/27/660x290/b_1200x675/inuyasha-personajes-blogspotcom_1857647.jpg'},
// {name: 'Goku', img: 'https://img.peru21.pe/files/article_content_ec_fotos/uploads/2017/08/09/598b925b3f334.jpeg'},
// {name: 'Ranma', img: 'https://pm1.narvii.com/6710/0889d3e651aa184f522788d0df070ab304757309_hq.jpg'}];

let arrayMostrado = pokemon.mostrarPropiedad(arrayPokemon);

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
  //console.log(arrayFiltrado);
  if(tipoPokemon.value === 'Selecciona tipo pokemon'){
    crearPlantilla(arrayMostrado);
  }else {
    crearPlantilla(arrayFiltrado);
    }
};

btnFiltrar.addEventListener('click', filtrarTipo);
