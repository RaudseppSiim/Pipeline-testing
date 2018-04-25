function double(num) {
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
