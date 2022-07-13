const mergeReverseCount  = (arr, start, mid, end)=>{
  let count = 0;
  let left = start;
  let right = mid+1
  const helpArr = [];
  while(left<=mid && right <=end){
    if(arr[left] <= arr[right]){
      helpArr.push(arr[left++])
    }  else{
      count+=(end-right+1);
      helpArr.push(arr[right++])
    }
  }
  while(left<=mid ){
    helpArr.push(arr[left++])
  }
  while(right <=end){
    helpArr.push(arr[right++])
  }
  return count;
}
const process = (arr, start, end)=>{
  if(start === end){
    return 0;
  }
  const mid = parseInt(start + (end - start)/2)
  return process(arr, start , mid) + process(arr, mid+1, end) + mergeReverseCount(arr, start, mid, end)
}
export const solution = (arr)=>{
  return process(arr, 0 , arr.length-1)

}
solution([2, 4, 3, 1 ])