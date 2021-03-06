import {dutchFlag, dutchFlag1} from '.'
const isDutchFlagArray = (arr, flag)=>{
  const lessCounts = arr.reduce((acc, curr)=>{
    if(curr<=flag){
      acc+=1;
    }
    return acc;
  }, 0)
  const lessEqualItemsRight  = arr.slice(0,lessCounts ).every(item=>item<=flag)
  const bigItemsRight  = arr.slice(lessCounts+1 ).every(item=>item>flag)
  return lessEqualItemsRight && bigItemsRight
}
test('', () => {

  let testCount=20;
  const maxArrayValue =10;
  const arrayLength = 10;

  for (let index = 0; index < testCount; index++) {
    const arr = Array.from(new Array(arrayLength) , ()=>(parseInt(String(Math.random() * maxArrayValue))));
    const copyArr = [...arr]
    const flag = Math.floor(Math.random() * 10);
   try{
      expect(isDutchFlagArray(dutchFlag(arr, flag),flag)).toBe(true)
      expect(isDutchFlagArray(dutchFlag1(arr, flag),flag)).toBe(true)
      
    }catch(e){
        console.log("error key",copyArr,arr, flag )
        throw e;
    }
  }
});