const fibonacci = function(n) 
{
    //Fn = Fn-1 + Fn-2
    if(n === 0){return 0;}
    if(n < 0) {return "OOPS";}
    let fib = [0, 1];
        for (let i = 2; i <= n; i++) 
        {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
     return fib[n];
};

// Do not edit below this line
module.exports = fibonacci;
