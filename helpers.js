function validTemp() {
  function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return randomNumberBetween(35, 40).toString();
}

module.exports = validTemp;
