const main = require('../main');

test('adds 1 + 2 to equal 3', () => {
  expect(main.sum(1, 2)).toBe(3);
});

test('adds 1 * 2 to equal 2', () => {
    expect(main.multi(1, 2)).toBe(2);
  });