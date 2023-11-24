// Plus Minus number ratio with decimal percession till 6 digits

function plusMinus() {
    let arr = [1, 1, 0, -1, -1];
    let negativeNumberCount = 0;
    let postivenumberCount = 0;
    let zerosCount = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        negativeNumberCount += 1;
      } else if (arr[i] > 0) {
        postivenumberCount += 1;
      } else {
        zerosCount += 1;
      }
    }

    console.log(
      (negativeNumberCount / arr.length).toFixed(6),
      (postivenumberCount / arr.length).toFixed(6),
      (zerosCount / arr.length).toFixed(6)
    );
}

//Staircase detail

function stairCase(n) {
     for (let i = 1; i <= n; i++) {
       let spaces = " ".repeat(n - i);
       let stairs = "#".repeat(i);
       console.log(spaces + stairs);
     }
}

