export const partMini = (arr:number[], start = 0, end = arr.length-1)=>{
  if(arr.length===1){
    return arr[start]
  }else{
    if(arr[start] < arr[start+1]){
      return arr[start]
    }else  if(arr[end] < arr[end-1]){
      return arr[end]
    }else{
      const middleIndex = parseInt(String(start + (end-start )/2))
      if(arr[middleIndex] < arr[middleIndex+1]){
        return partMini(arr, start, middleIndex)
      }else{
       return  partMini(arr, middleIndex+1, end)
      }
    }
  }
}
