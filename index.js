// Plus Minus number ratio with decimal percession till 6 digits

// function plusMinus() {
//     let arr = [1, 1, 0, -1, -1];
//     let negativeNumberCount = 0;
//     let postivenumberCount = 0;
//     let zerosCount = 0;

//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] < 0) {
//         negativeNumberCount += 1;
//       } else if (arr[i] > 0) {
//         postivenumberCount += 1;
//       } else {
//         zerosCount += 1;
//       }
//     }

//     console.log(
//       (negativeNumberCount / arr.length).toFixed(6),
//       (postivenumberCount / arr.length).toFixed(6),
//       (zerosCount / arr.length).toFixed(6)
//     );
// }

//Staircase detail

// function stairCase(n) {
//      for (let i = 1; i <= n; i++) {
//        let spaces = " ".repeat(n - i);
//        let stairs = "#".repeat(i);
//        console.log(spaces + stairs);
//      }
// }

//find the min and max value

//find the sum of array
//find the larget value in array and do seubtract from the total
//find the smallest value in array and do subtract from total

// function maxminsumvalues(arr) {
//   let total = arr.reduce((prev, curr) => prev + curr);

//   let min = total - arr[0];
//   let max = total - arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     let result = total - arr[i];
//     if (min > result) {
//       min = result;
//     }
//     if (max < result) {
//       max = result;
//     }
//   }
//   console.log(min, max);
// }
// maxminsumvalues([1, 2, 3, 4, 5]);

// function birthdayCandleCake(candles) {
//   // console.log(candles);
//   let max = candles[0];
//   let maxCoutn = 1;
//   for (let i = 1; i < candles.length; i++) {
//     if (max < candles[i]) {
//       max = candles[i];
//       maxCoutn = 1;
//       console.log(candles[i]);
//     } else if (max == candles[i]) {
//       maxCoutn += 1;
//     }
//   }
//   console.log(maxCoutn);
// }

// birthdayCandleCake([3, 4, 5, 3, 3, 5]);

function timeConversion(string) {
  // let string = ;
  let [hours, minutes, timeStamp] = string.split(":");

  if (timeStamp.slice(-2) === "PM" && parseInt(hours) < 12) {
    hours = String(parseInt(hours) + 12).padStart(2, "0");
  } else if (timeStamp.slice(-2) === "PM" && parseInt(hours) === 12) {
    hours = "12";
  } else if (parseInt(hours) === 12) {
    hours = "00";
  }
  return `${hours}:${minutes}:${timeStamp.slice(0, 2)}`;
}

let result = timeConversion("12:05:45PM");

console.log(result);
