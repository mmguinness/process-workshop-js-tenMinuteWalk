function tenMinuteWalk(directions) {
  let tenMinutes = false;
  let returnToStart = false;

  let west = []
  let east = []
  let north = []
  let south = []

    if(directions.length === 10) {
      tenMinutes = true;
    }
    
    const sortLetters = directions.map(letters);

    function letters(letter) {
      if (letter === 'w') {
        west.unshift(letter)
      } else if (letter === 'e') {
        east.unshift(letter)
      } else if (letter === 's') {
        south.unshift(letter)
      } else if (letter === 'n') {
        north.unshift(letter)
      }
    }
    
    if(west.length === east.length && north.length === south.length) {
      returnToStart = true;
    }

    if(tenMinutes === true && returnToStart === true) {
      return true;
    } else {
      return false;
    }

  }

module.exports = tenMinuteWalk;
