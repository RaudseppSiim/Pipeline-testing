function double(num) {
  if (isNaN(num)) {
    throw new Error('input need to be number');
  }
  return num * 2;
}

describe('double', () => {
  it('3*2 = 6', () => {
    expect(double(3)).toEqual(6);
  });
  it('2*2 = 4', () => {
    expect(double(2)).toEqual(4);
  });
});

describe('not to be', () => {
  it('5*2 = 52', () => {
    expect(double(5)).not.toBe(52);
  });
});

describe('kanepikala', () => {
  it('double "kala" on is not a number', () => {
    expect(() => {
      double('kala');
    }).toThrow();
  });
});
