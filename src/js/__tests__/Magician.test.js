import { Magician } from '../Magician';

test('testing class Magician', () => {
  const test = new Magician('magican', 2, 100, true);

  expect(test.attack).toEqual(85);
});

test('testing class Magician distance = <1 end >5', () => {
  const test = new Magician('magican', 0, 100, false);

  expect(test.attack).toEqual(0);
});

test('testing class Magician stoned = false', () => {
  const test = new Magician('magican', 2, 100, false);

  expect(test.attack).toEqual(90);
});