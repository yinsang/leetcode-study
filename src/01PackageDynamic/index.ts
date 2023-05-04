// N 件商品，限重为 maxWeight ； weights 重量数组； values 价值数组；
//  求给出一个重量空间时最大的value值；
export  const dynamic = (N, weights, values, maxWeight)=>{
  console.log(N, weights, values, maxWeight);
  const dp = {
    0:{}
  };
  for (let n = 0; n <=maxWeight; n++) {
    dp[0][n]=0
  }
  for (let n = 0; n < N; n++) {
    for (let w = 0; w <= maxWeight; w++) {
      if(w < weights[n]){
        if(dp[n+1]){
          dp[n+1][w] = dp[n][w];

        }else{
          dp[n+1] = {
            [w]:0
          }
        }
      }else{
        if(dp[n+1]){
            const full = dp[n][w-weights[n]] + values[n];
            console.log(full);
          dp[n+1][w] = Math.max(dp[n][w], full)
        }else{
          dp[n+1]={
            [w]:0
          }
        }
        
      }
    }
  }
  return dp[N][maxWeight]
}