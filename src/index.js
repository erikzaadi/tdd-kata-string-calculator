module.exports = {
  TrueFunction: () => true,
  Add: (stringNumbers) => { 
    if (!stringNumbers) 
      return  0;
    s = stringNumbers.match(/\/\/(.+)\n(.*)/);	 
    if (s)
      return s[2].split(s[1]).map(x => parseInt(x, 10)).reduce((sum, val) => sum + val ,0);
    return stringNumbers.split(/,|\n/)
      .map(stringNum => parseInt(stringNum, 10))
      .reduce((sum, val) => val + sum, 0);
  }
};
