require('../src/data.js');

const input = [
                {id: 1, name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
                weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic']},
                {id: 2, name: 'Ivysaur', img: 'http://www.serebii.net/pokemongo/pokemon/002.png',
                weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic']},
                {id: 49, name: 'Venomoth', img: 'http://www.serebii.net/pokemongo/pokemon/049.png',
                weaknesses: ['Fire', 'Flying', 'Psychic', 'Rock']}
               ];
const output = [
               {id: '1', name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png'},
               {id: '2', name: 'Ivysaur', img: 'http://www.serebii.net/pokemongo/pokemon/002.png'},
               {id: '49', name: 'Venomoth', img: 'http://www.serebii.net/pokemongo/pokemon/049.png'}
               ];

describe('pokemon', () => {
  it('is an object', () => {
    expect(typeof pokemon).toBe('object');
  });
  describe('pokemon.mostrarPropiedad', () => {
    it('is a function', () => {
      expect(typeof window.pokemon.mostrarPropiedad).toBe('function');
    });
    it('debería rertornar un array de nombres e imágenes de los pokemones', () => {
      expect(window.pokemon.mostrarPropiedad(input)).toEqual(output);
    });
    it('debería retornar un nuevo array para mostrar propiedades, no cambiar el original', () => {
      expect(window.pokemon.mostrarPropiedad(input)).not.toEqual(input);
    });
  });
});
