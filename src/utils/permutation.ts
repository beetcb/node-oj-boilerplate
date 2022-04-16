/**
 * Count permutations, P(n,r)
 */
export function countPerm(
  n: number,
  r: number
): number {
  const greaterR = Math.max(r, n - r);
  return getFactorial(n, greaterR);
}

/**
 * Get factorial of F(n,r), [n,r), r defaults to 0, f(0) = 1
 */
export function getFactorial(
  n: number,
  r: number = 0
): number {
  let prod = 1;
  while (n > r) {
    prod *= n;
    n--;
  }

  return prod;
}
