import { Daemon } from '../Daemon';

test('testing class Daemon', () => {
  const test = new Daemon('demon', 2, 100, true);

  expect(test.attack).toBe(85);
});

test('testing class Daemon distance = <1 end >5', () => {
  const test = new Daemon('demon', 0, 100, false);

  expect(test.attack).toBe(0);
});

test('testing class Daemon stoned = false', () => {
  const test = new Daemon('demon', 2, 100, false);

  expect(test.attack).toBe(90);
});