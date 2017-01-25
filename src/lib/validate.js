'use strict'

import _ from 'lodash';
import VError from 'verror';

const number = (value, valueError) => {
  if (!_.isFinite(value)) {
    throw new VError(
      valueError,
      `[validator] "${value}" is not a valid number`
    );
  }
  return true;
}

const string = (value, valueError) => {
  if (!_.isString(value)) {
    throw new VError(
      valueError,
      `[validator] "${value} is not a string"`
    );
  }
  return true;
}

export default Object.freeze({
  number,
  string
});
