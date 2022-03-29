const tenMinuteWalk = require('./tenMinuteWalk');

describe('tenMinuteWalk', () => {
  it('outputs false if walk is less than ten minutes long', () => {
    expect(tenMinuteWalk(['w', 'w'])).toBe(false);
  });

  it('outputs false if walk is more than ten minutes long', () => {
    expect(tenMinuteWalk(['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'])).toBe(false);
  });

  it('outputs true if walk is exactly ten minutes long and  w & e directions balance', () => {
    expect(tenMinuteWalk(['w', 'w', 'w', 'w', 'w', 'e', 'e', 'e', 'e', 'e'])).toBe(true);
  });

  it('outputs false if walk is exactly ten minutes long and  w & e directions do not balance', () => {
    expect(tenMinuteWalk(['w', 'w', 'w', 'w', 'w', 'w', 'w', 'e', 'e', 'e'])).toBe(false);
  });

  it('outputs true if walk is exactly ten minutes long and s & n directions balance', () => {
    expect(tenMinuteWalk(['n', 'n', 'n', 'n', 'n', 's', 's', 's', 's', 's'])).toBe(true);
  });

  it('outputs false if walk is exactly ten minutes long and s & n directions do not balance', () => {
    expect(tenMinuteWalk(['n', 'n', 'n', 'n', 'n', 'n', 'n', 's', 's', 's'])).toBe(false);
  });

  it('outputs true if walk is exactly ten minutes long and s & n and w & e directions balance', () => {
    expect(tenMinuteWalk(['n', 'n', 'e', 'w', 'e', 'w', 'e', 'w', 's', 's'])).toBe(true);
  });
});

