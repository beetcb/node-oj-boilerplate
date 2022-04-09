import type { TestArgs } from './oj';

function sumTwo([x, y]: [number, number]) {
  return x + y;
}

const testArgs: TestArgs = [
  sumTwo,
  {
    lineHandler: (data) =>
      data.split(' ')?.map((s) => Number(s)),
  },
];

export default testArgs;
