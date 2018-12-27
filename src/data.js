const mostrarPropiedad = (data) => {
  let arrayMostrar = [];
  for (let i = 0; i < data.length; i++) {
    arrayMostrar.push({id: data[i].id, name: data[i].name, img: data[i].img});
  }
  return arrayMostrar;
};

const filtrarPropiedad = (data, tipo) => {
  let arrayFiltrar = [];
  arrayFiltrar = data
    .filter((ele) => {
      for (let i = 0 ; i < ele.weaknesses.length ; i++) {
        if (ele.weaknesses[i] === tipo) {
          return true;
        }
      }
    })
    .map((ele) => {
      return `${ele.id} ${ele.name}`;
    });
  return arrayFiltrar;
};

window.pokemon = {
  mostrarPropiedad,
  filtrarPropiedad,
};
