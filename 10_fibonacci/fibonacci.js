const fibonacci = function(n) {
    let fibonacciArray = [0,1];
    if (n<0){
        return "OOPS";
    }
    if (n>1){
        for(let i = 2; i <= n; i++) {
            fibonacciArray[i] = fibonacciArray[i-1] + fibonacciArray[i-2];

        }
    }
    return fibonacciArray[n];


};

// Do not edit below this line
module.exports = fibonacci;
