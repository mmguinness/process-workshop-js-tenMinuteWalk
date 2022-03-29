const tenMinuteWalk = require('./tenMinuteWalk');

describe('tenMinuteWalk', () => {
  it('outputs false if walk is less than ten minutes', () => {
    expect(tenMinuteWalk(['w', 's'])).toBe(false);
  });
});

