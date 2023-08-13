const recursiveFiboacci = (n) =>{
    if(n < 2){
        return n
    }
    return recursiveFiboacci(n-1) + recursiveFiboacci(n-2)
}
console.log(recursiveFiboacci(2))
console.log(recursiveFiboacci(4))
console.log(recursiveFiboacci(5))
console.log(recursiveFiboacci(6))

//Big o = O(2^n)

//f(2) = f(1) + f(0)

//f(4) = f(3) + f(2)
//     = f(2) + f(1) + f(1) + f(0)
//     = f(1) + f(0) + f(1) + f(0)
//     = 2^4 - 6

//f(3) = f(2) + f(1)
//     = f(1) + f(0) + f(1)
//     = 2^3 - 3

//f(5) = f(4) + f(3)
//     = f(3) + f(2) + f(2) + f(1)
//     = f(2) + f(1) + f(1) + f(0) + f(1) + f(0) + f(1)
//     = f(1) + f(0) + f(1) + f(1) + f(0) + f(1) + f(0) + f(1)
//     = 2^5 -9

//f(n) = 2^n - 3 * (n-2)

//f(2) = 4 - 0
//     = 4