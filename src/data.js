const mostrarPropiedad = (data) => {
  let arrayMostrar = [];
  for (let i = 0; i < data.length; i++) {
    arrayMostrar.push({name: data[i].name, img: data[i].img});
  }
  return arrayMostrar;
};

const filtrarPropiedad = (data, tipo) => {
  let arrayFiltrar = [];
  arrayFiltrar = data
    .filter((ele) => {
      for (let i = 0 ; i < ele.type.length ; i++) {
        if (ele.type[i] === tipo) {
          return 1;
        }
      }
    }); // sin mapear me muestra y no me sale indefinido
  // .map((ele) => {
  //   return `${ele.name} ${ele.img}`;
  // });
  return arrayFiltrar;
};

const ordenarPropiedad = (data) => {
  let arrayOrdenar = [];

}

window.pokemon = {
  mostrarPropiedad,
  filtrarPropiedad,
};
