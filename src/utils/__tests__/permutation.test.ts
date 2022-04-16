import { countPerm } from '../permutation';

describe('Check Permutation', () => {
  it('shall retrun n when r == 1', () => {
    expect(countPerm(4, 1)).toBe(4);
    expect(countPerm(5, 1)).toBe(5);
    expect(countPerm(6, 1)).toBe(6);
  });

  it('shall return factorial of n(till r) when r != 1', () => {
    expect(countPerm(4, 2)).toBe(12);
    expect(countPerm(20, 10)).toBe(670442572800);
  });
});
