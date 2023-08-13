const factorial = (n) => {
    var result = 1
    for(let i=1; i<=n ;i++){
        result = result * i
    }
    return result
    
}

console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))
console.log(factorial(0))

//big O = O(n)