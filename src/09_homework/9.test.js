/**
 * @jest-environment jsdom
 */
const {
  isRightTriangle,
  getCircleLengthAndSquare,
  quadrEquation,
} = require('./9');

describe('Check right triangle', () => {
  test('Invalid value of arg', () => {
    const values = [
      [1, null, 2],
      [1, 2, '3'],
    ];
    values.map(value => {
      try {
        isRightTriangle(...value);
      } catch (e) {
        expect(e.message).toBe('Arg is NaN');
      }
    });
  });
  test('Arg <=0', () => {
    const values = [
      [1, -5, 2],
      [1, -6, 3],
    ];
    values.map(value => {
      try {
        isRightTriangle(...value);
      } catch (e) {
        expect(e.message).toBe('Arg <=0');
      }
    });
  });
  test('Correct right triangle', () => {
    const values = [
      [5, 3, 4],
      [1, 1, Math.sqrt(2)],
    ];
    values.map(value => {
      expect(isRightTriangle(...value)).toBeTruthy();
    });
  });
});

describe('Get length and square of circle', () => {
  let prompt;
  let originalPrompt;
  beforeEach(() => {
    originalPrompt = window.prompt;
    prompt = jest.spyOn(window, 'prompt');
  });
  afterEach(() => {
    window.prompt = originalPrompt;
  });
  test('Invalid radius of args', () => {
    const values = ['-1', '0', 'a'];
    values.map(value => {
      try {
        prompt.mockImplementationOnce(() => value);
      } catch (e) {
        expect(getCircleLengthAndSquare()).toThrow('Invalid radius');
      }
    });
  });
  test('Correct radius', () => {
    const values = ['3', '4', '2.2'];
    values.map(value => {
      const log = jest.spyOn(console, 'log');
      prompt.mockImplementationOnce(() => value);
      getCircleLengthAndSquare();
      expect(log).toHaveBeenCalledWith(
        `Length: ${(2 * Math.PI * +value).toFixed(10)}, Square: ${(
          Math.PI * Math.pow(+value, 2)
        ).toFixed(10)}`,
      );
    });
  });
});

describe('Get roots of quadratic equation', () => {
  test('Arg is Nan', () => {
    const values = [
      [1, null, 2],
      [1, 2, '3'],
    ];
    values.map(value => {
      try {
        quadrEquation(...value);
      } catch (e) {
        expect(e.message).toBe('Arg is NaN');
      }
    });
  });
  test('Negative discriminant', () => {
    const values = [
      [1, -3, 4],
      [1, -3, 5],
    ];
    values.map(value => {
      const log = jest.spyOn(console, 'log');
      quadrEquation(...value);
      expect(log).toHaveBeenCalledWith('No real roots');
    });
  });
  test('Two roots', () => {
    const values = [
      [-4, 12, -9, 1.5, 1.5],
      [2, -11, 5, 5, 0.5],
    ];
    values.map(value => {
      const log = jest.spyOn(console, 'log');
      quadrEquation(...value.slice(0, 3));
      expect(log).toHaveBeenCalledWith(`x1 = ${value[3]}, x2 = ${value[4]}`);
    });
  });
});
