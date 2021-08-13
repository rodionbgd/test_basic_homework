const isRightTriangle = (a, b, c) => {
  if (isNaN(parseFloat(a)) || isNaN(parseFloat(b)) || isNaN(parseFloat(c))) {
    throw new Error('Arg is NaN');
  }
  if (a < 0 || b < 0 || c <= 0) {
    throw new Error('Arg <=0');
  }
  const sides = [a, b, c].sort((a, b) => a - b);
  return (
    Math.pow(sides[2], 2).toFixed(10) ===
    (+Math.pow(sides[0], 2) + Math.pow(sides[1], 2)).toFixed(10)
  );
};

const getCircleLengthAndSquare = () => {
  const radius = prompt('Enter radius', '');
  if (isNaN(parseFloat(radius)) || +radius <= 0)
    throw new Error('Invalid radius');
  console.log(
    `Length: ${(2 * Math.PI * +radius).toFixed(10)}, Square: ${(
      Math.PI * Math.pow(+radius, 2)
    ).toFixed(10)}`,
  );
};

const quadrEquation = (a, b, c) => {
  if (isNaN(parseFloat(a)) || isNaN(parseFloat(b)) || isNaN(parseFloat(c))) {
    throw new Error('Arg is NaN');
  }
  let discr = Math.pow(b, 2) - 4 * a * c;
  if (discr < 0) {
    console.log('No real roots');
    return;
  }
  discr = +Math.sqrt(discr).toFixed(5);

  const x1 = (-b + discr) / (2 * a);
  const x2 = (-b - discr) / (2 * a);
  console.log(`x1 = ${x1}, x2 = ${x2}`);
};

module.exports = { isRightTriangle, getCircleLengthAndSquare, quadrEquation };
