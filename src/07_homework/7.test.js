/**
 * @jest-environment jsdom
 */
const { addFruitUI } = require('./7');

describe('Check interface', () => {
  let inputFruits;
  let addBtn;
  let fruits;
  beforeEach(() => {
    document.body.innerHTML =
      '<h2>Fruits</h2>\n' +
      '<label>\n' +
      '    <input id="input-fruit" type="text" value="">\n' +
      '</label>\n' +
      '<button id="add-fruit" type="button" hidden>Add</button>\n' +
      '<div id="fruits">\n' +
      '    <p>apple</p>\n' +
      '    <p>peach</p>\n' +
      '    <p>lemon</p>\n' +
      '</div>';
    inputFruits = document.getElementById('input-fruit');
    addBtn = document.getElementById('add-fruit');
    fruits = document.getElementById('fruits');
    addFruitUI();
  });
  describe('Hidden/visible button', () => {
    test('Hidden button at the start', () => {
      expect(addBtn.style.display).toBeFalsy();
    });
    test('Visible button', () => {
      const inputValue = [
        ['orange', 'inline'],
        ['', 'none'],
        ['melon', 'inline'],
      ];
      inputValue.map(value => {
        inputFruits.value = value[0];
        inputFruits.dispatchEvent(new Event('input'));
        expect(addBtn.style.display).toBe(value[1]);
      });
    });
  });
  describe('Add fruit', () => {
    test('Add fruit by click button', () => {
      const fruits = ['orange', 'strawberry', 'mellon'];
      fruits.map(value => {
        inputFruits.value = value;
        addBtn.click();
      });
      const allFruits = document.querySelectorAll('p');
      const result = ['peach', 'lemon', ...fruits];
      result.map((value, i) => {
        expect(allFruits[i].innerHTML).toBe(value);
      });
    });
    test('Add fruit by click Enter', () => {
      const fruits = ['orange', 'strawberry', 'mellon'];
      fruits.map(value => {
        inputFruits.value = value;
        inputFruits.dispatchEvent(
          new KeyboardEvent('keypress', { code: 'Enter' }),
        );
      });
      const allFruits = document.querySelectorAll('p');
      const result = ['peach', 'lemon', ...fruits];
      result.map((value, i) => {
        expect(allFruits[i].innerHTML).toBe(value);
      });
    });
  });
});
