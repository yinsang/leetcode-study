const arraySumFrom = (array, from, to)=>{
  const helpArray = {}
  for (let index = 0; index < array.length; index++) {
    for (let j = index; j < array.length; j++) {
      if(j===index){
        helpArray[`${j}_${j}`] = array[j]
      }else  if(j > index){
        helpArray[`${index}_${j}`] = helpArray[`${index}_${j-1}`] + array[j]
      }else{}
    }
  }
  return helpArray[`${from}_${to}`]
}
const arraySumFrom_preArray = (array:number[], from:number, to:number)=>{
  const helpArray = [array[0]]
  for (let index = 1; index < array.length; index++) {
    helpArray[index] = helpArray[index-1] + array[index]
  }
  if(from ===0){
    return helpArray[to]
  }else{
    return helpArray[to] - helpArray[from-1]
  }
}
export {arraySumFrom, arraySumFrom_preArray}