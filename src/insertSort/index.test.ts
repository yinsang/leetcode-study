import {insertSort } from './index'
it('', ()=>{
  expect(insertSort([3,2,1])).toEqual([1,2,3])
  let maxCount=10;

  for (let index = 0; index < maxCount; index++) {
    const arr = Array.from(new Array(50) , ()=>(parseInt(String(Math.random() * 10))));
    const copyArr = [...arr]
  expect(insertSort(arr)).toEqual(copyArr.sort())
  }
})