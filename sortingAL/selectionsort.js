function selectionSort(arr=[7,2,9,5,0,4]){
    //selection sorting

    //first select the element of 0th index and from the 1st loop
    //in the 2nd loop then we compare with j th index element if it minindex  element is larger
    // if condition is satisfied then we update minindex with j value and outside the 2nd loop 
    //we swap the value with minindex and i value
    // this process continues untill the 1st loop exists

    for(let i=0;i<arr.length-1;i++){
      let minindex = i;
      for (j=i+1; j<arr.length ;j++){
            if(arr[j]<arr[minindex]){
                minindex=j
              
            }
      }
    [arr[i],arr[minindex]] = [arr[minindex],arr[i]]

    }
    console.log(arr);
}

selectionSort()