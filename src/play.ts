function add(x: number, y: number) {
  return x + y;
}

const testArgs: TestArgs = [
  () => {},
  { lineHandler: () => {} },
];

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

export default testArgs;
