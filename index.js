'use strict';
const forEach = require('lodash/forEach');
const isEmpty = require('lodash/isEmpty');

function text2Object(str) {
  if (!str) {
    return {};
  }
  const rObj = {};
  try {
    const arr = str.split(/\n|\r|\r\n/);
    forEach(arr, value => {
      if (!isEmpty(value)) {
        const vArr = value.split('=');
        if (!/^#/.test(vArr[0])) {
          let v = vArr.slice(1, vArr.length).join('=');
          if (v === 'false') {
            v = false;
          }
          if (v === 'true') {
            v = true;
          }
          rObj[vArr[0]] = v;
        }
      }
    });
  } catch(e) {
    throw e;
  }
  return rObj;
};

module.exports = text2Object;
