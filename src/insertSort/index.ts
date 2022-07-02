const swap = (arr:number[], x:number, y:number)=>{
  arr[x] = arr[x] ^ arr[y]
  arr[y] = arr[x] ^ arr[y]
  arr[x] = arr[x] ^ arr[y]
}
export const insertSort = (arr)=>{
  // 0~n 有序
  // 3 2 1
  for (let index = 1; index < arr.length; index++) {
    for (let j = index-1; j>=0 && arr[j] > arr[j+1]; j--) {
      swap(arr, j, j+1)
    }
  }
  return arr;
}