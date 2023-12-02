function bubbleSort(arr){
    //require a loop to go thorugh all the array elements
    //require a 2nd loop to check the adjacent elements
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j] > arr[j+1]){
                let temp=arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp 
            }
        }
    }
    return arr;
}

//optimized verions

function optimizedBubbleSort(arr=[5,0,-12,3.3,3]){
       
    for(let i=0;i<arr.length-1;i++){
        for(j=0;j<arr.length-i-1;j++){
            if(arr[j] > arr[j+1]){
            [arr[j], arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    console.log(arr);
    return arr

}
optimizedBubbleSort()
let sortedArray = bubbleSort([5,0,-12,3.3,3])