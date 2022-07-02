import {partMini} from './index'
it('', ()=>{
  expect(partMini([0])).toBe(0)
  expect(partMini([0, 1])).toBe(0)
  expect(partMini([1, 0])).toBe(0)
  expect(partMini([1, 0,2])).toBe(0)
})