const sourceModule = require('../src/index.js');

describe('Empty test to show folder structure', () => {
  it('should be true', () => {
    expect(sourceModule.TrueFunction()).to.be.eql(true);
  });
});

describe('Amazong add function', () => {
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
  it('should return 3 if passed 1,2', () => {
    expect(sourceModule.Add('1,2')).to.be.eql(3);
  });
});
