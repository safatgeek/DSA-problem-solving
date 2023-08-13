const recursiveFactorial = (n) =>{
    if(n < 1){
        return 1
    }

    return n * recursiveFactorial(n-1)
}



/*

f(4) = 4 * f(3)
     = 4 * 3 * f(2)
     = 4 * 3 * 2 * f(1)
     = 4 * 3 * 2 * 1 * 1


Big 0 = O(n)

*/


console.log(recursiveFactorial(0))
console.log(recursiveFactorial(1))
console.log(recursiveFactorial(2))
console.log(recursiveFactorial(4))
console.log(recursiveFactorial(6))