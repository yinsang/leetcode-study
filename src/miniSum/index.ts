const merge = (arr, start, mid ,end)=>{
  let left = start;
  let right = mid+1;
  const mergeArr = [];
  let sum = 0;
  while (left<=mid && right<=end) {
    if(arr[left] < arr[right]){
      sum += arr[left] * (end-right+1);
      mergeArr.push(arr[left++])
    }else{
      mergeArr.push(arr[right++])
    }
  }
  while (left<=mid) {
    mergeArr.push(arr[left++])
  }
  while (right<=end) {
    mergeArr.push(arr[right++])
  }
  mergeArr.forEach((item,index)=>{
    arr[start+index] = item;
  })
  return sum;
}
const process = (arr, start, end)=>{
  if(start===end){
    return 0
  }
  const mid = parseInt(start + (end-start)/2)
  return process(arr, start, mid) + process(arr, mid+1,end) + merge(arr, start, mid ,end)
}
export const miniSum = (arr)=>{
  if(arr.length<2){
    return 0
  }
  return process(arr, 0, arr.length-1)
}
miniSum([1,3,4,2,5])
export const reduceMiniSum = (arr)=>{
  return arr.reduce((acc, curr, currIndex, arr)=>{
    let accInner  = acc;
    for (let index = 0; index < currIndex; index++) {
      if(arr[index] < curr){
        accInner+= arr[index];
      }
    }
    return accInner;
  }, 0)

}