// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
// 输入: [1,2,3]
// 输出:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]
const backTracking = (array) => {
  let result = [];


  const dfs = (depth, item, used) => {
    if(depth===array.length){
      result.push([...item])
      return;
    }
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if(used[element] === undefined || used[element]< index){
        item = [...item, element]
        let prevIndex=undefined;
        if(used[element]< index){
          prevIndex = used[element];
        }
        used[element]=index;
        dfs(depth+1, item, used)
        used[element] = prevIndex;
        item.pop()
      }
    }
  }
  dfs(0, [], {})
  return result;
}
export { backTracking };
