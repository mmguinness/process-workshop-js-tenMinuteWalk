function tenMinuteWalk(directions) {
  let tenMinutes = false;

    if(directions.length === 10) {
      tenMinutes = true;
    }

    if(tenMinutes === true) {
      return true;
    } else {
      return false;
    }

  }

module.exports = tenMinuteWalk;