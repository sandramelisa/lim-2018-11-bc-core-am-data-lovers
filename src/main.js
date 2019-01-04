const containerList = document.getElementById('container-list');
const btnFiltrar = document.getElementById('btn-filtrar');
const tipoPokemon = document.getElementById('tipo-pokemon');
const arrayPokemon = POKEMON.pokemon;
// const arrayPrueba = [{name: 'Inuyasha', img: 'https://staticr1.blastingcdn.com/media/photogallery/2018/2/27/660x290/b_1200x675/inuyasha-personajes-blogspotcom_1857647.jpg'},
// {name: 'Goku', img: 'https://img.peru21.pe/files/article_content_ec_fotos/uploads/2017/08/09/598b925b3f334.jpeg'},
// {name: 'Ranma', img: 'https://pm1.narvii.com/6710/0889d3e651aa184f522788d0df070ab304757309_hq.jpg'}];

const arrayMostrado = pokemon.mostrarPropiedad(arrayPokemon);
const arrayVacio = [];

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

  if(tipoPokemon.value === 'Selected'){
    crearPlantilla(arrayMostrado);
    alert("Debes seleccionar un tipo");
  }else{
    const arrayFiltrado = pokemon.filtrarPropiedad(arrayPokemon, tipoPokemon.value);
    document.getElementById('region-kanto').innerHTML='';
    crearPlantilla(arrayFiltrado);
  }
};

btnFiltrar.addEventListener('click', filtrarTipo);


const numeros = [8,6,5,4,8,53,4,2,0,1,8];
const letras = ['f','s','a','z','j','d'];
const arrObjetos = [{nombre:'Alexis', apellido:'Fernandez'}, {nombre:'Oscar', apellido:'Pescoran'}];
console.log(numeros);
console.log(letras);
console.log(arrObjetos);
numeros.sort();
letras.sort();
arrObjetos.sort((a,b) => {return b.nombre - a.nombre});
console.log(numeros);
console.log(letras);
console.log(arrObjetos);
