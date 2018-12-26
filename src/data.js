const mostrarPropiedad = (data) => {
  let arrayMostrar = [];
  for (let i = 0; i < data.length; i++) {
    arrayMostrar.push({id: data[i].id, name: data[i].name, img: data[i].img});
  }
  return arrayMostrar;
};

window.pokemon = {
  mostrarPropiedad,
};
