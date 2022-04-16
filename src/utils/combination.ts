import {
  getFactorial,
  countPerm,
} from './permutation';
/**
 * Count combinations, C(n,r), let's assume that C(n,r)=0(n<r)
 */
export function countComb(
  n: number,
  r: number
): number {
  if (n < r) {
    return 0;
  }
  if (n === r) {
    return 1;
  }

  return countPerm(n, r) / getFactorial(r);
}
