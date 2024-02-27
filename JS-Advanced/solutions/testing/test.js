import { expect } from 'chai';
import isSymmetric from './symmetry.js';
import sum from './sum.js';
import rgbToHexColor from './rgbToHex.js';
import createCalculator from './addSubtract.js';
import isOddOrEven from './evenOrOdd.js';
import lookupChar from './charLookup.js';
import mathEnforcer from './mathEnforcer.js';
import StringBuilder from './stringBuilder.js';
import testNumbers from './testNumbers.js';

describe('Symmetry Checker', () => {
  it('returns true for symmetric array', () => {
    expect(isSymmetric([1, 2, 2, 1])).to.be.true;
  });

  it('returns false for non-symmetric array', () => {
    expect(isSymmetric([1, 2, 3])).to.be.false;
  });

  it('returns false for non-array', () => {
    expect(isSymmetric(5)).to.be.false;
  });

  it('returns false for type-different symmetric array', () => {
    expect(isSymmetric([1, 2, '1'])).to.be.false;
  });

  // Test overloading

  it('returns true for symmetric array with odd number of elements', () => {
    expect(isSymmetric([1, 2, 1])).to.be.true;
  });

  it('returns true for symmetric array with strings', () => {
    expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
  });

  it('returns false for asymmetric array with strings', () => {
    expect(isSymmetric(['a', 'b', 'c'])).to.be.false;
  });

  it('returns false for string parameter', () => {
    expect(isSymmetric('abba')).to.be.false;
  });
});

describe('Sum Checker', () => {
  it('returns sum of all positive elements', () => {
    expect(sum([1, 2, 3])).to.equal(6);
  });

  it('does not equal wrong resul twhen adding positive elements', () => {
    expect(sum([1, 2, 3])).to.not.equal(5)
  });

  it('returns sum of all negative elements', () => {
    expect(sum([-1, -2, -3])).to.equal(-6);
  });

})

describe('RGB to HEX', () => {
  it('converts white', () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
  });

  it('converts black', () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
  });

  it('converts SoftUni dark blue to #234465', () => {
    expect(rgbToHexColor(35, 68, 101)).to.equal('#234465')
  });

  it('returns undefined for missing parameters', () => {
    expect(rgbToHexColor(35, 68)).to.be.undefined;
  });

  it('returns undefined for values out of range', () => {
    expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;
  });

  it('returns undefined for values out of range', () => {
    expect(rgbToHexColor(0, -1, -1)).to.be.undefined;
  });

  it('returns undefined for values out of range', () => {
    expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
  });

  it('returns undefined for values out of range', () => {
    expect(rgbToHexColor(256, 256, 256)).to.be.undefined;
  });

  it('returns undefined for values out of range', () => {
    expect(rgbToHexColor(257, 256, 257)).to.be.undefined;
  });

  it('returns undefined for values out of range', () => {
    expect(rgbToHexColor(256, 256, 258)).to.be.undefined;
  });

  it('returns undefined for invalid parameter type', () => {
    expect(rgbToHexColor('0', '0', '0')).to.be.undefined;
  });

})

describe('Summator', () => {
  let instance = null;

  beforeEach(() => {
    instance = createCalculator();
  });

  it('has all methods', () => {
    expect(instance).to.has.ownProperty('add');
    expect(instance).to.has.ownProperty('subtract');
    expect(instance).to.has.ownProperty('get');
  });

  it('starts empty', () => {
    expect(instance.get()).to.equal(0);
  });

  it('adds single number', () => {
    instance.add(1);
    expect(instance.get()).to.equal(1);
  });

  it('adds multiple numbers', () => {
    instance.add(1);
    instance.add(2);
    expect(instance.get()).to.equal(3);
  });

  it('subtracts single number', () => {
    instance.subtract(1);
    expect(instance.get()).to.equal(-1);
  });

  it('subtracts multiple numbers', () => {
    instance.subtract(1);
    instance.subtract(2);
    expect(instance.get()).to.equal(-3);
  });

  it('adds and subtracts', () => {
    instance.add(1);
    instance.subtract(2);
    expect(instance.get()).to.equal(-1);
  });

  it('works with numbers as strings', () => {
    instance.add('1');
    instance.add('2');
    instance.subtract('4');
    expect(instance.get()).to.equal(-1);
  });


});

describe('is odd or even', () => {
  it('test undefined', () => {
    expect(isOddOrEven(undefined)).to.equal(undefined);
  });

  it('test null', () => {
    expect(isOddOrEven(null)).to.equal(undefined);
  });

  it('test num', () => {
    expect(isOddOrEven(1)).to.equal(undefined);
  });

  it('test boolean', () => {
    expect(isOddOrEven(true)).to.equal(undefined);
  });

  it('return even with even string', () => {
    expect(isOddOrEven('some')).to.equal('even');
    expect(isOddOrEven('or')).to.equal('even');
  });

  it('return odd with odd string', () => {
    expect(isOddOrEven('odd')).to.equal('odd');
    expect(isOddOrEven('hello')).to.equal('odd');
  });
})

describe('lookupChar', () => {
  it('should return undefined when first param is not a string', () => {
    expect(lookupChar(undefined, 1)).to.equal(undefined);
    expect(lookupChar(1, 1)).to.equal(undefined);
  });

  it('should return undefined when second param is not an integer', () => {
    expect(lookupChar('some', undefined)).to.equal(undefined);
    expect(lookupChar('some', null)).to.equal(undefined);
    expect(lookupChar('some', '1')).to.equal(undefined);
    expect(lookupChar('some', 1.23)).to.equal(undefined);
  });

  it('should return "Incorrect index" when second param is not within index range', () => {
    expect(lookupChar('some', -1)).to.equal('Incorrect index');
    expect(lookupChar('some', 4)).to.equal('Incorrect index');
  });

  it('should return correct char when both params are valid', () => {
    expect(lookupChar('other', 0)).to.equal('o');
    expect(lookupChar('other', 3)).to.equal('e');
  });
});

describe('mathEnforcer', () => {
  describe('add five', () => {
    it('should return undefined when parameter is not a number', () => {
      expect(mathEnforcer.addFive(undefined)).to.equal(undefined);
      expect(mathEnforcer.addFive(null)).to.equal(undefined);
      expect(mathEnforcer.addFive('1')).to.equal(undefined);
    })

    it('should return number plus 5 when parameter is valid number', () => {
      expect(mathEnforcer.addFive(10)).to.equal(15);
      expect(mathEnforcer.addFive(1.1 + 2.2)).to.be.closeTo(8.3, 0.01);
      expect(mathEnforcer.addFive(-10)).to.equal(-5);
    })
  })

  describe('subtract five', () => {
    it('should return undefined when parameter is not a number', () => {
      expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined);
      expect(mathEnforcer.subtractTen(null)).to.equal(undefined);
      expect(mathEnforcer.subtractTen('1')).to.equal(undefined);
    })

    it('should return number minus 10 when parameter is valid number', () => {
      expect(mathEnforcer.subtractTen(10)).to.equal(0);
      expect(mathEnforcer.subtractTen(1.1 + 2.2)).to.be.closeTo(-6.7, 0.01);
      expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
    })
  })

  describe('sum', () => {
    it('should return undefined when first parameter is not a number', () => {
      expect(mathEnforcer.sum(undefined, 1)).to.equal(undefined);
      expect(mathEnforcer.sum(null, 1)).to.equal(undefined);
      expect(mathEnforcer.sum('1', 1)).to.equal(undefined);
    })

    it('should return undefined when second parameter is not a number', () => {
      expect(mathEnforcer.sum(1, undefined)).to.equal(undefined);
      expect(mathEnforcer.sum(1, null)).to.equal(undefined);
      expect(mathEnforcer.sum(1, '1')).to.equal(undefined);
    })

    it('should return sum when parameters are valid numbers', () => {
      expect(mathEnforcer.sum(10, 1)).to.equal(11);
      expect(mathEnforcer.sum(1.1 + 2.2, 3.3)).to.be.closeTo(6.6, 0.01);
      expect(mathEnforcer.sum(-10, -5)).to.equal(-15);
    })
  })
})

describe('Tests for StringBuilder Class', () => {

  describe('Tests for the Constructor', () => {

    it('Should not throw an error if the input is a 1-letter string', () => {
      let instance = new StringBuilder('a');
      expect(() => instance).not.to.throw(TypeError, 'Argument must be a string');
      expect(instance.toString()).to.equal('a');
    });

    it('Should not throw an error if the input is a 3-letter string', () => {
      let instance = new StringBuilder('abc');
      expect(() => instance).not.to.throw(TypeError, 'Argument must be a string');
      expect(instance.toString()).to.equal('abc');
    });

    it('Should not throw an error if the input is undefined', () => {
      let instance = new StringBuilder();
      expect(() => instance).not.to.throw(TypeError, 'Argument must be a string');
      expect(instance.toString()).to.equal('');
    });

    it('Should throw an error if the input is not a string', () => {
      expect(() => new StringBuilder(123)).to.throw(TypeError, 'Argument must be a string');
      expect(() => new StringBuilder(['abc'])).to.throw(TypeError, 'Argument must be a string');
      expect(() => new StringBuilder(null)).to.throw(TypeError, 'Argument must be a string');
    });
  });

  describe('Tests for the append Method', () => {

    it('Should work as intended when the given input is a string', () => {
      let instance = new StringBuilder('abc');
      instance.append('123');
      expect(instance.toString()).to.equal('abc123');
    });

    it('Should throw an error when the given input is not a string', () => {
      let instance1 = new StringBuilder('abc');
      expect(() => instance1.append(undefined)).to.throw(TypeError, 'Argument must be a string');
      let instance2 = new StringBuilder('abc');
      expect(() => instance2.append(123)).to.throw(TypeError, 'Argument must be a string');
      let instance3 = new StringBuilder('abc');
      expect(() => instance3.append()).to.throw(TypeError, 'Argument must be a string');
    });
  });

  describe('Tests for the prepend Method', () => {

    it('Should work as intended when the given input is a string', () => {
      let instance = new StringBuilder('abc');
      instance.prepend('123');
      expect(instance.toString()).to.equal('123abc');
    });

    it('Should throw an error when the given input is not a string', () => {
      let instance1 = new StringBuilder('abc');
      expect(() => instance1.prepend(undefined)).to.throw(TypeError, 'Argument must be a string');
      let instance2 = new StringBuilder('abc');
      expect(() => instance2.prepend(123)).to.throw(TypeError, 'Argument must be a string');
      let instance3 = new StringBuilder('abc');
      expect(() => instance3.prepend()).to.throw(TypeError, 'Argument must be a string');
    });
  });

  describe('Tests for the insertAt Method', () => {

    it('Should work as intended when the first input is a string', () => {
      let instance1 = new StringBuilder('abc');
      instance1.insertAt('123', 1);
      expect(instance1.toString()).to.equal('a123bc');
      let instance2 = new StringBuilder('abc');
      instance2.insertAt('123', 4);
      expect(instance2.toString()).to.equal('abc123');
      let instance3 = new StringBuilder('abc');
      instance3.insertAt('123');
      expect(instance3.toString()).to.equal('123abc');
      let instance4 = new StringBuilder('abc');
      instance4.insertAt('123', -1);
      expect(instance4.toString()).to.equal('ab123c');
      let instance5 = new StringBuilder('abc');
      instance5.insertAt('123', -4);
      expect(instance5.toString()).to.equal('123abc');
    });

    it('Should throw an error when the given input is not a string', () => {
      let instance1 = new StringBuilder('abc');
      expect(() => instance1.insertAt(undefined)).to.throw(TypeError, 'Argument must be a string');
      let instance2 = new StringBuilder('abc');
      expect(() => instance2.insertAt(123, 1)).to.throw(TypeError, 'Argument must be a string');
      let instance3 = new StringBuilder('abc');
      expect(() => instance3.insertAt(123)).to.throw(TypeError, 'Argument must be a string');
      let instance4 = new StringBuilder('abc');
      expect(() => instance4.insertAt()).to.throw(TypeError, 'Argument must be a string');
    });
  });

  describe('Tests for the remove Method', () => {

    it('Should work as intended when the input is as wanted', () => {
      let instance1 = new StringBuilder('abc');
      instance1.remove(1, 0);
      expect(instance1.toString()).to.equal('abc');
      let instance2 = new StringBuilder('abc');
      instance2.remove(0, 1);
      expect(instance2.toString()).to.equal('bc');
      let instance3 = new StringBuilder('abc');
      instance3.remove(4, 1);
      expect(instance3.toString()).to.equal('abc');
      let instance4 = new StringBuilder('abc');
      instance4.remove(1, 4);
      expect(instance4.toString()).to.equal('a');
      let instance5 = new StringBuilder('abc');
      instance5.remove();
      expect(instance5.toString()).to.equal('abc');
    });
  });

  describe('Test for integration', () => {
    it('toString works correctly - 2', () => {
      const expected = '\n A \n\r B\t123   ';
      const obj = new StringBuilder();

      expected.split('').forEach(s => { obj.append(s); obj.prepend(s); });

      obj.insertAt('test', 4);

      obj.remove(2, 4);

      expect(obj.toString()).to.equal('  st21\tB \r\n A \n\n A \n\r B\t123   ');
    });
  })
});

describe('Test Numbers', () => {
  describe('sumNumbers', () => {
    it('works with valid numbers', () => {
      expect(testNumbers.sumNumbers(3, 5)).to.equal('8.00');
    });

    it('works with negative number', () => {
      expect(testNumbers.sumNumbers(3, -5)).to.equal('-2.00');
    });

    it('works with floating point', () => {
      expect(testNumbers.sumNumbers(1.5555, 1.3333)).to.equal('2.89');
    });

    it('returns undefined with string parameters', () => {
      expect(testNumbers.sumNumbers('1', '2')).to.equal(undefined);
      expect(testNumbers.sumNumbers(1, '2')).to.equal(undefined);
      expect(testNumbers.sumNumbers('1', 2)).to.equal(undefined);
    });

    it('returns undefined with invalid parameters', () => {
      expect(testNumbers.sumNumbers(null, null)).to.equal(undefined);
      expect(testNumbers.sumNumbers(1, null)).to.equal(undefined);
      expect(testNumbers.sumNumbers(null, 2)).to.equal(undefined);
    });
  });

  describe('numberChecker', () => {
    it('works with odd value', () => {
      expect(testNumbers.numberChecker(1)).to.contain('The number is odd!');
    });

    it('works with even value', () => {
      expect(testNumbers.numberChecker(2)).to.contain('The number is even!');
    });

    it('works with odd value as string', () => {
      expect(testNumbers.numberChecker('1')).to.contain('The number is odd!');
    });

    it('works with even value as string', () => {
      expect(testNumbers.numberChecker('2')).to.contain('The number is even!');
    });

    it('works with empty string', () => {
      expect(testNumbers.numberChecker('')).to.contain('The number is even!');
    });

    it('detects invalid parameter', () => {
      expect(() => testNumbers.numberChecker('a')).to.throw(Error, 'The input is not a number!');
    });
  });

  describe('averageSumArray', () => {
    it('works with integers', () => {
      expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
    });

    it('works with floats', () => {
      expect(testNumbers.averageSumArray([1.5, 2.5, 3.5])).to.equal(2.5);
    });
  });
});
