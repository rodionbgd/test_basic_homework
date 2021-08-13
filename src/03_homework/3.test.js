/**
 * @jest-environment jsdom
 */
const { getSumOfRange, multiplicationTable, getAverageOfOdds } = require('./3');

describe('Get sum of arithmetic progression', () => {
  test('correct start and finish', () => {
    const values = [
      [50, 100, 3750],
      [0, 50, 1250],
      [-50, 50, 0],
    ];
    values.forEach(value => {
      const log = jest.spyOn(console, 'log');
      getSumOfRange(value[0], value[1]);
      expect(log).toHaveBeenCalledWith(value[2]);
    });
  });
  test('incorrect start and finish', () => {
    const values = [
      [50, '100', 'Invalid args'],
      ['100', null, 'Invalid args'],
    ];
    values.forEach(value => {
      const log = jest.spyOn(console, 'log');
      getSumOfRange(value[0], value[1]);
      expect(log).toHaveBeenCalledWith(value[2]);
    });
  });
});

describe('Multiplication table', () => {
  test('table in range 1-9', () => {
    const log = jest.spyOn(console, 'log');
    for (let i = 1; i < 10; i++) {
      multiplicationTable(i);
      for (let j = 1; j < 10; j++) {
        expect(log).toHaveBeenCalledWith(`${i} x ${j} = ${i * j}`);
      }
    }
  });
  test('incorrect arg', () => {
    const log = jest.spyOn(console, 'log');
    multiplicationTable('not a number');
    expect(log).toHaveBeenCalledWith('Invalid arg');
  });
});

describe('Average sum of ddds', () => {
  function checkAverage(values, cb) {
    const log = jest.spyOn(console, 'log');
    values.forEach(val => {
      jest.spyOn(window, 'prompt').mockImplementationOnce(() => val[0]);
      cb();
      expect(log).toHaveBeenCalledWith(val[1]);
    });
  }

  test('Get average sum of odds with correct range', () => {
    const values = [
      [5, 3],
      [10, 5],
      [50, 25],
    ];
    checkAverage(values, getAverageOfOdds);
  });
  test('incorrect input', () => {
    const values = [
      [-2, 'Value >=1'],
      ['isNan', 'Value is NaN'],
    ];
    checkAverage(values, getAverageOfOdds);
  });
});
