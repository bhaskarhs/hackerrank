function insertionSort(arr){
  
    //we need to pick a value that is the currentvalue and it will be 1st element and it should be inside the first loop 
    //in the second loop that value is compared to the left most element of array
    //if the current element is less than its left most element then its index is not changes and the j index value should greterthan 0  and the presentvalue be greater than j and then j should be decremented
    // if satisfied then arr[j] will be moved to arr[j]+1
    //after the loop arr[j+1] will be moved assigned with presentvalue
    //the second loop we use to compare the present value with its present"j indexvalue in the array"
    //and constantly decrease the j value this help in shifting the present value towards left side of array 
    //when the second loop got failed the present value will be assigned to j+1 index position.

    for(let i=0;i<arr.length;i++){
        let presentValue = arr[i]
        let j;
        for(j=i-1;j>=0 && arr[j]>presentValue;j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = presentValue;
    }
    console.log(arr);
}
insertionSort([5,-9,23,3,0,0.1,-0.1,2]);