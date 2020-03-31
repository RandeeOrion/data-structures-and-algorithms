'use strict';
let linkedLIstContent = require('./linked-list.js');
let NewList = linkedLIstContent.LinkedList

describe('LinkedList tests', () => {
  it('Manke a new Node',  () => {
    let testlist =  new NewList();
    expect(testlist).toBeTruthy();
  });


})
