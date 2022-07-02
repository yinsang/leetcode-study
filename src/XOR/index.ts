export const getUniqueNumber = (input:number[])=>{
  let result = 0;
  input.forEach(num=>{
    result = result ^ num
  })
  return result
}
const isOneInPositionX = (num, X)=>{
  return (num >> X & 1) === 0
}
export const getUniqueTwoNumber = (input:number[])=>{
  let allOXR = getUniqueNumber(input);
  let resultA = allOXR;
  let resultB;
  let position = 0;
  for (let nowValue = allOXR; (nowValue & 1) ===0; nowValue=nowValue>>1) {
    position+=1;
  }
  input.forEach(num=>{
    if(isOneInPositionX(num, position)){
      resultA = resultA ^ num;
    }
  })
  resultB = allOXR ^ resultA
  return [resultA, resultB]
}