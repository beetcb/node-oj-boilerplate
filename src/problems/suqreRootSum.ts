import type { TestArgs } from '../oj';

function squareRootSum([startNum, n]: [
  number,
  number
]) {
  let prevNum = startNum;
  let sum = startNum;
  for (let i = 1; i < n; i++) {
    const currNum = Math.pow(prevNum, 0.5);
    prevNum = currNum;
    sum += currNum;
  }

  return sum.toFixed(2);
}

const testArgs: TestArgs = [
  squareRootSum,
  {
    lineHandler: (data) =>
      data.split(' ')?.map((s) => Number(s)),
  },
];

export default testArgs;
