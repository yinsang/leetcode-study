// handle item in original array.
// 把数组的index及之前的数据变成小根堆


const swap = (arr, x, y) => {
  if (x === y) {
    return;
  }
  const temp = arr[y];
  arr[y] = arr[x];
  arr[x] = temp;
};
class PriorityQueue {
  arr = [];
  start=0;
  end=0;
  // 做成小根堆
  heapInsert(item){
    this.arr.push(item)
    let nowIndex = this.arr.length-1
    while(item < this.arr[Math.floor(nowIndex-1/2)] && nowIndex>=1){
      swap(this.arr, nowIndex, Math.floor(nowIndex-1/2))
      nowIndex = Math.floor(nowIndex-1/2)
    }
  }
  add(item) {
    this.heapInsert(item)
  }
  heapify(){
    let nowIndex = 0;
    let leftIndex = (nowIndex * 2)+1;
    while(leftIndex <=this.arr.length){
      let smallestIndex = leftIndex+1 <=this.arr.length && this.arr[leftIndex+1]< this.arr[leftIndex]? leftIndex+1:leftIndex;
      smallestIndex= this.arr[smallestIndex] < this.arr[nowIndex] ? smallestIndex:nowIndex;
      if(smallestIndex===nowIndex){
        break;
      }
      swap(this.arr, smallestIndex, nowIndex)
      nowIndex = smallestIndex;
      leftIndex = (nowIndex * 2)+1;
    }
  }
  poll() {
    if(this.arr.length>1){
      swap(this.arr, 0, this.arr.length-1)
      const last = this.arr[this.arr.length-1]
      this.arr.length = this.arr.length-1
      this.heapify()
      console.log('last', last);
      return last

    }else{
      const last = this.arr[0]
      this.arr = [];
      console.log('last', last);
      return last
    }
  }
}
export const heapInsert = (arr, from, to) => {
  let currentIndex = from + 1;
  while (
    arr[currentIndex] < arr[Math.floor((currentIndex - 1) / 2)] &&
    from < to
  ) {
    swap(arr, currentIndex, Math.floor((currentIndex - 1) / 2));
    currentIndex = Math.floor((currentIndex - 1) / 2);
  }
  return arr;
};
const HeapSort_AlmostSortArray = (array, maxDistance) => {

  const queue = new PriorityQueue();
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // [0, 1,2]
    if(index<maxDistance){
      queue.add(element)
    }else{
      queue.add(element)
      array[index-maxDistance] = queue.poll()
    }
    if(index === array.length-1){
     let nowIndex = index-maxDistance+1;
  while(queue.arr.length>0){
   array[nowIndex] = queue.poll()
   nowIndex+=1
  }
     
      
    }
  }
  return array;
};
export { HeapSort_AlmostSortArray };
