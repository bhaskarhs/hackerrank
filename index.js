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

// function timeConversion(string) {
//   let [hours, minutes, timeStamp] = string.split(":");
//   if (timeStamp.slice(-2) === "PM" && parseInt(hours) < 12) {
//     hours = String(parseInt(hours) + 12).padStart(2, "0");
//   } else if (timeStamp.slice(-2) === "PM" && parseInt(hours) === 12) {
//     hours = "12";
//   } else if (parseInt(hours) === 12) {
//     hours = "00";
//   }
//   return `${hours}:${minutes}:${timeStamp.slice(0, 2)}`;
// }

// let result = timeConversion("12:05:45PM");

// console.log(result);

//to find the gradeEnglish
//write a function to round the values to its nearest 5 multiple
//as per the condition round them up
// loop the array and pass each values to the function the result will be pushed to the new array

// function grades(n) {
//   let number = 5 - (parseInt(n) % 5);
//   let roundedNumber = 0;

//   if (n > 0 && number <= 2) {
//     roundedNumber = n + number;
//   } else {
//     roundedNumber = n;
//   }
//   return roundedNumber >= 40 ? roundedNumber : n;
// }

// function gradesEnglish(grade) {
//   let roundedresultsArray = [];
//   for (let i = 0; i < grade.length; i++) {
//     roundedresultsArray.push(grades(grade[i]));
//   }

//   return roundedresultsArray;
// }

// console.log(gradesEnglish([73, 67, 38, 33]));

//Apple and Orange
// function looparray(array, start) {
//   const result = array.map((item) => item + start);
//   return result;
// }

// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//   // Write your code here
//   const apple = looparray(apples, a);
//   const orange = looparray(oranges, b);
//   let applecount = 0;
//   let orangecount = 0;
//   for (let i = 0; i < apple.length; i++) {
//     if (s <= apple[i] && t >= apple[i]) {
//       applecount += 1;
//     }
//   }

//   for (let i = 0; i < orange.length; i++) {
//     if (s <= orange[i] && t >= orange[i]) {
//       orangecount += 1;
//     }
//   }
//   console.log(applecount, orangecount);
// }

// countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);


//kangaros jump counts
//start at x1 with speed of v1 second kangaros start at x2 and with speed of v2
//return yes if both kangaors exit

function kangaors(x1,v1,x2,v1) {
    if (v1 > v2) {
        
    }
}