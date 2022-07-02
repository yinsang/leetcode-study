import {mergeSort } from './index'
it('', ()=>{
  let maxCount=2;

  for (let index = 0; index < maxCount; index++) {
    const arr = Array.from(new Array(10) , ()=>(parseInt(String(Math.random() * 10))));
    console.log(arr,'arr');
    const copyArr = [...arr].sort()
    console.log(mergeSort(arr), copyArr);
   expect(mergeSort(arr)).toEqual(copyArr)
 
  }
})