require('../src/data.js');

const input = [
  {id: 1, name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], type: ['Grass', 'Poison']},
  {id: 2, name: 'Ivysaur', img: 'http://www.serebii.net/pokemongo/pokemon/002.png',
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], type: ['Grass', 'Poison']},
  {id: 49, name: 'Venomoth', img: 'http://www.serebii.net/pokemongo/pokemon/049.png',
    weaknesses: ['Fire', 'Flying', 'Psychic', 'Rock'], type: ['Bug', 'Poison']}
];

const input2 = [
  {name: 'Ivysaur', img: 'http://www.serebii.net/pokemongo/pokemon/002.png'},
  {name: 'Charmander', img: 'http://www.serebii.net/pokemongo/pokemon/005.png'},
  {name: 'Charmander', img: 'http://www.serebii.net/pokemongo/pokemon/005.png'},
  {name: 'Kakuna', img: 'http://www.serebii.net/pokemongo/pokemon/014.png'},
  {name: 'Charizard', img: 'http://www.serebii.net/pokemongo/pokemon/006.png'}
];

const input3 = [
  {name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png'},
  {name: 'Ivysaur', img: 'http://www.serebii.net/pokemongo/pokemon/002.png'},
  {name: 'Venomoth', img: 'http://www.serebii.net/pokemongo/pokemon/049.png'}
];

const input4 = [
  {name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png', egg: '2 km'},
  {name: 'Ivysaur', img: 'http://www.serebii.net/pokemongo/pokemon/002.png', egg: 'Not in Eggs'},
  {name: 'Venomoth', img: 'http://www.serebii.net/pokemongo/pokemon/049.png', egg: 'Not in Eggs'}
];

const type = 'Grass';
const egg = '2 km';

const output = [
  {id: 1, name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], type: ['Grass', 'Poison']},
  {id: 2, name: 'Ivysaur', img: 'http://www.serebii.net/pokemongo/pokemon/002.png',
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], type: ['Grass', 'Poison']},
];
const output2 = [
  {name: 'Charizard', img: 'http://www.serebii.net/pokemongo/pokemon/006.png'},
  {name: 'Charmander', img: 'http://www.serebii.net/pokemongo/pokemon/005.png'},
  {name: 'Charmander', img: 'http://www.serebii.net/pokemongo/pokemon/005.png'},
  {name: 'Ivysaur', img: 'http://www.serebii.net/pokemongo/pokemon/002.png'},
  {name: 'Kakuna', img: 'http://www.serebii.net/pokemongo/pokemon/014.png'}
];

const output3 = 1;

describe('pokemon', () => {
  it('is an object', () => {
    expect(typeof pokemon).toBe('object');
  });
  describe('pokemon.mostrarPropiedad', () => {
    it('is a function', () => {
      expect(typeof window.pokemon.mostrarPropiedad).toBe('function');
    });
    it('debería retornar un nuevo array para mostrar propiedades, no cambiar el original', () => {
      expect(window.pokemon.mostrarPropiedad(input)).not.toEqual(input);
    });
  });
  describe('pokemon.filtrarPropiedad', () => {
    it('is a function', () => {
      expect(typeof window.pokemon.filtrarPropiedad).toBe('function');
    });
    it('no debería modificar el array original', () => {
      expect(window.pokemon.filtrarPropiedad(input)).not.toEqual(input);
    });
    it('debería filtrar a los pokemones por tipo', () => {
      expect(window.pokemon.filtrarPropiedad(input, type)).toEqual(output);
    });
  });
  describe('pokemon.ordenarPropiedad', () => {
    it('is a function', () => {
      expect(typeof window.pokemon.ordenarPropiedad).toBe('function');
    });
    it('no debería modificar el array original', () => {
      expect(window.pokemon.ordenarPropiedad(input3)).toEqual(input3);
    });
    it('Debería retornar los nombres de los pokemon de a A a Z', () => {
      expect(window.pokemon.ordenarPropiedad(input2)).toEqual(output2);
    });
  });
  describe('pokemon.calcularPropiedad', () => {
    it('is a function', () => {
      expect(typeof window.pokemon.calcularPropiedad).toBe('function');
    });
    it('no debería modificar el array original', () => {
      expect(window.pokemon.calcularPropiedad(input4)).not.toEqual(input4);
    });
  });
  it('debería retornar la cantidad de pokemon de 2km', () => {
    expect(window.pokemon.calcularPropiedad(input4, egg)).toEqual(output3);
  });
});
