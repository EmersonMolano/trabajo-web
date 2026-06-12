const parseDecimal = (value) => Number(value.replace(',', '.'));

export const operations = [
  { label: '+', nombre: 'Suma' },
  { label: '-', nombre: 'Resta' },
  { label: 'x', nombre: 'Multiplicacion' },
  { label: '/', nombre: 'Division' },
];

export function calculateResult(numberOne, numberTwo, operation) {
  const a = parseDecimal(numberOne);
  const b = parseDecimal(numberTwo);

  if (numberOne.trim() === '' || numberTwo.trim() === '' || Number.isNaN(a) || Number.isNaN(b)) {
    return 'Ingresa dos numeros validos';
  }

  if (operation === '/' && b === 0) {
    return 'No se puede dividir entre cero';
  }

  const results = {
    '+': a + b,
    '-': a - b,
    x: a * b,
    '/': a / b,
  };

  return `Resultado: ${results[operation]}`;
}
