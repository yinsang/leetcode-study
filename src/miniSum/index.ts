[].reduce
export const miniSum = (arr)=>{
  return arr.reduce((acc, curr, currIndex, arr)=>{
    let accInner  = acc;
    for (let index = 0; index < currIndex; index++) {
      if(arr[index] < arr[currIndex]){
        accInner+= arr[index];
      }
    }
    return accInner;
  }, 0)

}