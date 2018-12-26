const mostrarPropiedad = (data) => {
  let arrayMostrar = [];
  for (let i = 0; i < data.length; i++) {
    arrayMostrar.push({id: data[i].id, name: data[i].name, img: data[i].img});
  }
  return arrayMostrar;
};
const filtrarPropiedad = () => {
  let arrayFiltrar = [];
  return arrayFiltrar;
};

window.pokemon = {
  mostrarPropiedad,
  filtrarPropiedad,
};
