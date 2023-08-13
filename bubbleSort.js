function bubbleSort(arr){
    let swapped

    do{
        swapped = false
        for(let i = 0; i < arr.length - 1; i++){
            console.log(arr[i + 1])
            if(arr[i] > arr[i + 1]){
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    }while(swapped)
    return arr
}

let unsortedArr = [-9,2,5,-1,-7]

bubbleSort(unsortedArr)

console.log(unsortedArr)

// Big O = O(n^2)


