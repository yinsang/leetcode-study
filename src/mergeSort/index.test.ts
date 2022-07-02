import {mergeSort } from './index'
it('', ()=>{
  let maxCount=2;

  for (let index = 0; index < maxCount; index++) {
    const arr = Array.from(new Array(1000) , ()=>(parseInt(String(Math.random() * 10))));
    const copyArr = [...arr].sort()
   expect(mergeSort(arr)).toEqual(copyArr)
  }
})