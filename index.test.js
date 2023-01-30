const calculator = require('./index');
test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(10, 20)).toBe(30);
});