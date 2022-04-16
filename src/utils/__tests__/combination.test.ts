import { countComb } from '../combination';

describe('Check Combination', () => {
  it('shall retrun 0 when r > n', () => {
    expect(countComb(1, 4)).toBe(0);
    expect(countComb(2, 3)).toBe(0);
  });

  it('shall retrun 1 when r == n', () => {
    expect(countComb(4, 4)).toBe(1);
  });

  it('shall return C(n,r) when r <= n', () => {
    expect(countComb(6, 2)).toBe(15);
    expect(countComb(20, 10)).toBe(184756);
  });
});
