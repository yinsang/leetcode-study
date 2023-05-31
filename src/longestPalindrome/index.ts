export  const longestPalindrome = (str)=>{
  const map = {};
  let longElement = ''
  let longestEvenCount = 0;
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if(map[element] === undefined){
      map[element] = 1
    }else{
      map[element] += 1
    }
  }
  let evenCount = 0;
  const oddLength = Object.keys(map).reduce((acc, current)=>{
    if(map[current] % 2 ===0){
      acc+=map[current]
    }else if(map[current] > evenCount){
      evenCount=map[current]
    }
    return acc;
  }, 0)
  return evenCount + oddLength
}