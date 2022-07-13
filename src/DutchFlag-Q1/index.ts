const swap = (arr, firstBigIndex,end)=>{
  const temp = arr[end]
  arr[end] = arr[firstBigIndex];
  arr[firstBigIndex] = temp;

}
/** 双侧指针 */
const dutchFlag = (arr, flag)=>{
  // [3,2,3]
  let start =0;
  let end = arr.length-1;
  let flagIndex = 0;
  while(flagIndex<end){
    if(arr[flagIndex]<flag){
  start+=1;
  flagIndex +=1;
    }else if(arr[flagIndex]===flag){
      flagIndex+=1;
    }else {
      // 大于
      swap(arr, flagIndex, end)
      end-=1;;
    }
  }
  return arr;
}
/** 单侧指针 */
const dutchFlag1 = (arr, flag) =>{
  let left = 0;let end = 0;let index = 0;
  let endCount = 0;
  while(index+endCount<arr.length){
    if(arr[index]< flag){
      left+=1;
      end+=1;
      index+=1;
    }else if(arr[index]=== flag){
      end+=1;
      index+=1;
    }else{
      // 大于
      swap(arr, index, arr.length-1-endCount)
      endCount+=1;
    }
  }
  return arr;
}
export {
  dutchFlag,
  dutchFlag1
}