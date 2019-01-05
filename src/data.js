const mostrarPropiedad = (data) => {
  let arrayMostrar = [];
  for (let i = 0; i < data.length; i++) {
    arrayMostrar.push({name: data[i].name, img: data[i].img}); // , weaknesses: data[i].weaknesses});
  }
  return arrayMostrar;
};

const filtrarPropiedad = (data, tipo) => {
  let ok = 0;
  let arrayFiltrar = [];
  arrayFiltrar = data
    .filter((ele) => {
      for (let i = 0 ; i < ele.type.length ; i++) {
        if (ele.type[i] === tipo) {
          ok = 1
          return 1;
        }
      }
    });
  if (ok === 1) {
    return arrayFiltrar;
  } else {
    return data;
  }
};

const ordenarPropiedad = (data, tipo) => {
  let arrayOrdenar = [];
  for(let i = 0 ; i < data.length ; i++){
    arrayOrdenar.push({name: data[i].name, img: data[i].img, type: data[i].type});
  }
  arrayOrdenar.sort((prev, next) =>{
    if(prev.name > next.name){
      return 1;
    }
    if(prev.name < next.name){
      return -1;
    }
    return 0;
  });
  return arrayOrdenar;
};

window.pokemon = {
  mostrarPropiedad,
  filtrarPropiedad,
  ordenarPropiedad,
};
