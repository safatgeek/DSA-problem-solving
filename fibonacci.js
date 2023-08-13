const fibonacci = (n) => {
    const result = [0, 1]
    if(n==1){
        console.log([0])
        return [0]
    }
    for(let i=2; i<n; i++){
        result.push(result[i-1] + result[i-2] )
    }
    console.log(result)

    return result
}


fibonacci(1)

// Big O = O(n)
