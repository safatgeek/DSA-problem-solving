const swapped = (arr) =>{
    let temp 
    temp = arr[0]
    arr[0] = arr[1]
    arr[1] = temp

    return arr

}

console.log(swapped([1,2]))