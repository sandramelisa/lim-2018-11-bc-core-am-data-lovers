require('../src/data.js');

const input = [
  {id: 1, name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], type: ['Grass', 'Poison']},
  {id: 2, name: 'Ivysaur', img: 'http://www.serebii.net/pokemongo/pokemon/002.png',
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], type: ['Grass', 'Poison']},
  {id: 49, name: 'Venomoth', img: 'http://www.serebii.net/pokemongo/pokemon/049.png',
    weaknesses: ['Fire', 'Flying', 'Psychic', 'Rock'], type: ['Bug', 'Poison']}
];
// const type = ['Water', 'Bug', 'Dragon', 'Electric', 'Ghost', 'Fire', 'Ice', 'Fighting',
//   'Grass', 'Psychic', 'Rock', 'Ground', 'Poison', 'Flying'];
// const output = [
//   {id: '1', name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png'},
//   {id: '2', name: 'Ivysaur', img: 'http://www.serebii.net/pokemongo/pokemon/002.png'},
//   {id: '49', name: 'Venomoth', img: 'http://www.serebii.net/pokemongo/pokemon/049.png'}
// ];
const type = 'Grass';
// const input1 = [
//   {id: 1, name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
//     weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], type: 'Grass'},
//   {id: 2, name: 'Ivysaur', img: 'http://www.serebii.net/pokemongo/pokemon/002.png',
//     weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], type: 'Grass'}
// ];
const output = [
  {id: 1, name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], type: ['Grass', 'Poison']},
  {id: 2, name: 'Ivysaur', img: 'http://www.serebii.net/pokemongo/pokemon/002.png',
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'], type: ['Grass', 'Poison']},
  ];

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
});
