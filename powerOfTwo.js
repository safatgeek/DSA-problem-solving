const isPowerOfTwo = (n) =>{
    if(n == 1 ){
        return true
    }

    while(n > 1){
        if(n % 2 !== 0){
            return false
        }
        n = n/2
    }
    return true
    
}

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(5))
console.log(isPowerOfTwo(32))
console.log(isPowerOfTwo(40))





