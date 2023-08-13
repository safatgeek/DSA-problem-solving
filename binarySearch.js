const binarySearch = (sortedArr, target) =>{
    let leftIndex = 0
    let rightIndex = sortedArr.length - 1

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

        if(sortedArr[middleIndex] === target){
            return middleIndex
        }

        if(target < sortedArr[middleIndex]){
            rightIndex = middleIndex - 1
        }else(
            leftIndex = middleIndex + 1
        )
    }

    return -1
    
}

console.log(binarySearch([1,2,3,4,5], 4))
console.log(binarySearch([1,2,3,4,5], 2))
console.log(binarySearch([1,2,3,4,5], 1))
console.log(binarySearch([1,2,3,4,5], 9))

//Big O = O(logn) [base 2]