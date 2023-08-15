const mergeSort = (arr) => {
    if(arr.length < 2){
        return arr
    }
    let middlePoint = Math.floor((arr.length) / 2)
    let left = arr.slice(0, middlePoint)
    let right = arr.slice(middlePoint)
    
    return merge(mergeSort(left), mergeSort(right))
}
    const merge = (left, right) =>{
        let sortedArr = []
        while(left.length && right.length){
            if(left[0] <= right[0]){
                sortedArr.push(left.shift())
            }else{
                sortedArr.push(right.shift())
            }
        }

        return [...sortedArr,...left,...right]
    }


console.log(mergeSort([-6, 20, -2, 4, 8]))