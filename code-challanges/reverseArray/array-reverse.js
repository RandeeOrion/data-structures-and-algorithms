'use strict'

let arr = [1,2,3,'four',5,6]

let reverseArray = (ar => {
  let newArr = [];
  for(i=1; i<=ar.length; i++){
    let ind = ar.length - i; 
    newArr[newArr.length] = ar[ind]
  }
  return newArr;
})


reverseArray(arr);
