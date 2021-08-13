/**
 * @jest-environment jsdom
 */
const { describe, test } = require('@jest/globals');
const { diff, isWord, pow } = require('./6');

describe('Get diff between two numbers', () => {
  test('Diff between two numbers', () => {
    expect(diff(5, 7)).toBe(2);
    expect(diff(4, 4)).toBe(0);
  });
  test('Throw NaN error', () => {
    try {
      diff(1, 'a');
    } catch (e) {
      expect(e.message).toBe('NaN arg');
    }
  });
});

describe('One word or more', () => {
  test('String with one word', () => {
    const words = ['f1rst second 345 ...', 'one', '1234 ttt 222'];
    words.forEach(value => {
      expect(isWord(value)).toBeTruthy();
    });
  });
  test('String with many word', () => {
    const words = ['first second 345 ...', 'one two', '1234 ttt 222 \n ttt'];
    words.forEach(value => {
      expect(isWord(value)).toBeFalsy();
    });
  });
  test('Throw no words error', () => {
    try {
      isWord('123 d1');
    } catch (e) {
      expect(e.message).toBe('No words');
    }
  });
});

describe('Pow number', () => {
  test('Pow correct number', () => {
    const values = [
      [2, 2, 4],
      [1, 5, 1],
      [-1, 2, 1],
      [0, 2, 0],
    ];
    values.forEach(value => {
      expect(pow(value[0], value[1])).toBe(value[2]);
    });
  });
  test('Pow incorrect arg', () => {
    const values = [[2, '2'], [1]];
    values.forEach(value => {
      expect(pow(value[0], value[1])).toBeNull();
    });
  });
});
