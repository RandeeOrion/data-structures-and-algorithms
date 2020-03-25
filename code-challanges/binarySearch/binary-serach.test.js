'use strict';

const binarySearch = require('..binary-search.js');


const array = [1,2,3,4,5,6,8,9,10];
const smallArray = [2];
const emptyArray = [];

describe('testing binarySearch function', () => {
  it('testing a number that does not exist', () => {
    expect(binarySearch(array, 7)).toStrictEqual(-1);
  })
  it('testing an empty array', () => {
    expect(binarySearch(emptyArray, 3)).toStrictEqual(-1);
  })
  it('testing value at last index', () => {
    expect(binarySearch(array, 10)).toStrictEqual(10)
  })
  it('testing a teeny tiny array', () => {
    expect(binarySearch(smallArray, 3)).toStrictEqual(-1);
  })
  it('testing a teeny tiny array', () => {
    expect(binarySearch(smallArray, 2)).toStrictEqual(0);
  })
})

