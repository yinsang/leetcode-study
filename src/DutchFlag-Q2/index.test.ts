import {dutchFlag} from '.'
const isDutchFlagArray = (arr, flag)=>{
  const lessEqualCounts = arr.reduce((acc, curr)=>{
    if(curr<flag){
      acc[0]+=1;
    } 
    if(curr===flag){   
         acc[1]+=1;
    }
    return acc;
  }, [0,0])
  const lessItemsRight  = arr.slice(0,lessEqualCounts[0] ).every(item=>item<flag)
  const equalRight = arr.slice(lessEqualCounts[0],lessEqualCounts[1]  ).every(item=>item===flag)
  const bigItemsRight  = arr.slice(lessEqualCounts[0]+ lessEqualCounts[1] ).every(item=>item>flag)
  return lessItemsRight &&  equalRight && bigItemsRight
}
test('', () => {

  let testCount=200;
  const maxArrayValue =10;
  const arrayLength = 10;

  for (let index = 0; index < testCount; index++) {
    const arr = Array.from(new Array(arrayLength) , ()=>(parseInt(String(Math.random() * maxArrayValue))));
    const copyArr = [...arr]
    const flag = Math.floor(Math.random() * 10);
   try{
      expect(isDutchFlagArray(dutchFlag(arr, flag),flag)).toBe(true)
    }catch(e){
        console.log("error key",copyArr,arr, flag )
        throw e;
    }
  }
});