
const merge = (arr, start, mid, end)=>{
  
  let left = start;
  let right = mid+1;
  const mergeArr = [];

  while (left<=mid && right<= end){
    let l = arr[left];
    let r = arr[right];
    if(l<=r){
      mergeArr.push(l)
      left+=1;
    }else{
      mergeArr.push(r)
      right+=1;
    }
  }
  while(left<=mid){
    mergeArr.push(arr[left++])
  }
  while(right<=end){
    mergeArr.push(arr[right++])
  }
  mergeArr.forEach((item,i)=>{
    arr[start+i] = item;
  })
}
    const process = (arr, start, end)=>{
      if(start===end){
        return ;
      }
      const mid = parseInt(String(start + (end-start)/2))
      process(arr, start, mid)
      process(arr, mid+1, end)
       merge(arr, start, mid, end);
       return arr;
    }
export const mergeSort = (arr)=>{
  if(arr.length<2){
    return arr;
  }else{
    return process(arr, 0, arr.length-1)

  }
}
mergeSort([4,3,2,1])