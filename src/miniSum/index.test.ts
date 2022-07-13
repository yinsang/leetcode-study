import {miniSum, reduceMiniSum } from './index'
it('', ()=>{
 
  let maxCount=10;

  for (let index = 0; index < maxCount; index++) {
    const arr = Array.from(new Array(50) , ()=>(parseInt(String(Math.random() * 10))));
    const copyArr = [...arr]
    expect(miniSum(arr)).toEqual(reduceMiniSum(copyArr))
  }
})