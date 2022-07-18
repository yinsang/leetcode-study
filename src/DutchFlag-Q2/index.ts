const swap = (arr, firstBigIndex,end)=>{
  const temp = arr[end]
  arr[end] = arr[firstBigIndex];
  arr[firstBigIndex] = temp;

}
/**
 * 小于和等于flag的在左，大于flag的在右
 * @param arr 
 * @param flag 
 * @returns 
 */
// 课程中的实现,左侧右挤
const dutchFlag = (arr, flag)=>{
  // [3,2,3]  =》【2、3、3】
  // 35674358， 5 
  let flagIndex = 0;
  let leftIndex = 0;
  let rightIndex = arr.length-1;
  while(flagIndex<=rightIndex){
    if(arr[flagIndex]<flag){
      if(flagIndex!==leftIndex){
        swap(arr, leftIndex, flagIndex)
      }
      flagIndex +=1;
      leftIndex+=1
    } else if(arr[flagIndex]===flag){
      flagIndex+=1
    }else {
      // 大于
      swap(arr, flagIndex, rightIndex)
      rightIndex -=1;
    }
  }
  return arr;
}
export {
  dutchFlag,
}