export const getlpsl =(s)=>{
    let n = s.length;
    let ans = 1;
    if(n<2)
        return n;
    const dp = Array.from({length:n},()=>Array(n).fill(false));
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
        if(i+1<n)
            dp[i][i+1] = s[i]==s[i+1];        
    }
    for (let k = 3; k <= n; k++) {
        for (let i = 0;i+k-1<n; i++) {
            let j = i+k-1;
            if(s[i]==s[j])
                dp[i][j] = dp[i+1][j-1];
            
        }
        
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if(dp[i][j])
                ans = Math.max(j-i+1,ans)            
        }
    }
    return ans;
}