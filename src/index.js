module.exports = {
  TrueFunction: () => true,
  Add: stringNumbers =>
    (!stringNumbers ? 0 :
      stringNumbers.split('\n')
        .map(stringNum => parseInt(stringNum, 10))
        .reduce((sum, val) => val + sum, 0)),
};
