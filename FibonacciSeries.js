function fibonacci(n) {
    if (n <= 2) {
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(30))
console.log(fibonacci(10))

//With memoization technique(Using Dynamic Programming Principles)
function fibonacciUsingMemoization(n, memo=[]) {
    if (memo[n] !== undefined) {
        return memo[n]
    }
    if (n <= 2) {
        return 1
    }
    let result = fibonacciUsingMemoization(n-1, memo) + fibonacciUsingMemoization(n-2, memo);
    memo[n] = result;
    return result;
}


console.log(fibonacciUsingMemoization(10, memo=[]))





//Optimized short approach of above
function fibonacciUsingMemoizationOptimized(n, memo=[undefined, 1 ,1]) {
    if (memo[n] !== undefined) {
        return memo[n]
    }
    let result = fibonacciUsingMemoization(n-1, memo) + fibonacciUsingMemoization(n-2, memo);
    memo[n] = result;
    return result;
}

console.log(fibonacciUsingMemoizationOptimized(10, memo=[]))
