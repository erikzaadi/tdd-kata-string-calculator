const sourceModule = require('../src/index.js');

describe('Empty test to show folder structure', () => {
  it('should be true', () => {
    expect(sourceModule.TrueFunction()).to.be.eql(true);
  });
});

describe('Amazong add function', () => {
  describe('steps 1 - 5', () => {
    it('should exist', () => {
      expect(sourceModule).to.have.property('Add');
    });
    it('should be a function', () => {
      expect(typeof (sourceModule.Add)).to.be.eql('function');
    });
    it('should return a number', () => {
      const something = sourceModule.Add();
      expect(typeof (something)).to.be.eql('number');
    });
    it('should return 0 if passed an empty string', () => {
      expect(sourceModule.Add('')).to.be.eql(0);
    });
    it('should return 1 of passed 1', () => {
      expect(sourceModule.Add('1')).to.be.eql(1);
    });
    it('should return 3 if passed two numbers with new line between', () => {
      expect(sourceModule.Add('1\n2')).to.be.eql(3);
    });
  });
  describe('step 6', () => {
    it('should handle unknown amount of numbers', () => {
      function getRandomInt(min, max) {
        const newMin = Math.ceil(min);
        const newMax = Math.floor(max);
        return Math.floor(Math.random() * (newMax - newMin)) + newMin;
      }
      const amount = getRandomInt(1, 10);
      const newRandNumbers = [...Array(amount)].map(() => getRandomInt(1, 100));
      expect(sourceModule.Add(newRandNumbers.join('\n'))).to.be.eql(newRandNumbers.reduce((sum, val) => sum + val), 0);
    });
  });
});
