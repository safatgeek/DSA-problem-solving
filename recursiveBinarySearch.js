const recursiveBinarySearch = (sortedArr, target) =>{
    return search(sortedArr, target, 0, sortedArr.length - 1)
}

const search = (sortedArr, target, leftIndex, rightIndex) =>{
    if(leftIndex > rightIndex){
        return -1
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

    if(target === sortedArr[middleIndex]){
        return middleIndex
    }

    if(target < sortedArr[middleIndex]){
        return search(sortedArr, target, leftIndex, middleIndex-1)
    }else{
        return search(sortedArr, target, middleIndex + 1, rightIndex)
    }
}


console.log(recursiveBinarySearch([1,3,5,6,10], 10))
console.log(recursiveBinarySearch([1,3,5,6,10], 3))
console.log(recursiveBinarySearch([1,3,5,6,10], 15))
console.log(recursiveBinarySearch([1,3,5,6,10], -5))

//Big O = O(logn)