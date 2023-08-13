const findMax = (arr) =>{
    let max = arr[0]
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]            
        }
    }
    return max
}


console.log(findMax([2,4,7,10,11,1,3]))