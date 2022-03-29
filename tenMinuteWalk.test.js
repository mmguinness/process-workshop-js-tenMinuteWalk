const tenMinuteWalk = require('./tenMinuteWalk');

describe('tenMinuteWalk', () => {
  it('outputs false if walk is less than ten minutes long', () => {
    expect(tenMinuteWalk(['w', 's'])).toBe(false);
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
// Acceptance Criteria Check
  it('outputs true if walk is exactly ten minutes long and s & n and w & e directions balance', () => {
    expect(tenMinuteWalk(['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w'])).toBe(true);
  });

  it('outputs false if walk is exactly ten minutes long and s & n and w & e directions are not balanced', () => {
    expect(tenMinuteWalk(['w', 's', 'e', 'n', 'n', 'e', 's', 'w', 'w', 'w'])).toBe(false);
  });

  it('outputs false if walk is exactly ten minutes long and s & n and w & e directions are not balanced', () => {
    expect(tenMinuteWalk(['w', 's', 'e', 's', 's', 'e', 's', 'w', 'n', 'n'])).toBe(false);
  });
});

