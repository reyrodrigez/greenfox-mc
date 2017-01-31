'use strict'

import validate from './validate';
import { expect } from 'chai';
import VError from 'verror';

describe('Validate', () => {

  it('should validate number', () => {
    const result = validate.number(2);
    expect(result).to.be.ok;
  });

  it('should validate a string', () => {
    const result = validate.string('test');
    expect(result).to.be.ok;
  });

  it('should throw error at bad number format', () => {
    const func = () => validate.number(
      'not a number',
      new VError('[test] Test should fail')
    );
    expect(func).throw('Test should fail');
  });

});
