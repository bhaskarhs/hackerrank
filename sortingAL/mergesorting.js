// Merge sort is a recursive algorithm that continuously splits the array in half
//  until it cannot be further divided i.e.,
// the array has only one element left (an array with one element is always sorted). 
//Then the sorted subarrays are merged into one sorted array.
/*
we need 2 function to complete mergesorting
where one function is ment for diving the array into single element continusly 
*/

function merge(arr1, arr2) {
    debugger
    let i = 0;
    let j = 0;
    let result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result
}

function mergeSorting(arr) {
    if (arr.length <= 1) {
        return arr
    }

    let midEle = Math.floor(arr.length / 2)
    let left = mergeSorting(arr.slice(0, midEle))
    let right = mergeSorting(arr.slice(midEle))
    return merge(left, right)

}

console.log(mergeSorting([5,2,1 ,3, 4]))
