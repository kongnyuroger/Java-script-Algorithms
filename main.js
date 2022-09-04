

function mergSort(arr){
   if(arr.length < 2){
      return arr
   }
   const mid = Math.floor(arr.length / 2);
   const leftArr = arr.slice(0, mid);
   const rightArr= arr.slice(mid);
   return merge(mergSort(leftArr), mergSort(rightArr))
}
const arr = [8, 20, -2, 4, -6,]
console.log(mergSort(arr))

 






function plusMinus(arr){
   let positiveNumbers = [];
   let negativeNumbers = [];
   let zero = [];
   for(let i = 0; i < arr.length; i++){
      if(arr[i] > 0){
         positiveNumbers.push(arr[i]);
      }
      if(arr[i] < 0){
         negativeNumbers.push(arr[i]);
      }
      if(arr[i] == 0){
         zero.push(arr[i]);
      }
   }
   const positiveRatio = positiveNumbers.length / arr.length;
   const negativeRatio = negativeNumbers.length / arr.length;
   const zeroRatio = zero.length / arr.length;
   console.log(positiveRatio.toFixed(6));
   console.log(negativeRatio.toFixed(6));
   console.log(zeroRatio.toFixed(6));


}

plusMinus([1, 1, 0, -1, -1,]);

function miniMaxSum(arr) {
  // const newLocal = 0;
   // Write your code here
   let sumOfSmallArr = 0;
   let sumOfBigArr = 0;
   let maxNumber = Math.max(...arr);
   let smallArr = arr.filter((_, i) => i !== arr.indexOf(maxNumber));
   let  smallestNumber = Math.min(...arr);
   let bigArr = arr.filter((_,i) => i !== arr.indexOf(smallestNumber));
   
      for(let i = 0; i < smallArr.length; i++){
         sumOfSmallArr += smallArr[i];
         sumOfBigArr += bigArr[i];
     }
   console.log(sumOfSmallArr);
   console.log(sumOfBigArr);
  
}
miniMaxSum([5,5,4,4,8])

function birthdayCakeCandles(candles) {
   // Write your code here
   let tallestCandle = 0;
   let numOfTallCandles = [];
   for(let i = 0; i < candles.length; i++){
      if(candles[i] > tallestCandle){
        tallestCandle = candles[i]
      }    
   }
   for(let i = 0; i < candles.length; i++){
      if(candles[i] == tallestCandle){
        numOfTallCandles.push(candles[i])
      }    
   }
   console.log(numOfTallCandles.length);
}
birthdayCakeCandles([3, 2, 1, 3])




function timeConversion(s){
   // Write your code here
  return s.split(':').map((i, index) => {
      if(index === 0) {
         const isPm = s.includes("PM");
         if(i == 12 && !isPm) {
            return "00";
         }else if((i == 12 && isPm) || !isPm) {
            return i;
         }
        return `${+i + 12}`;
      } else if(index === 2) {
         return i.substr(0, 2);
      }
      return i;
   }).join(":");


   let militaryTime = "";
   if(s.includes('A')){
    
      if(arr[0] == '12'){
         arr[0] = "00";
         let timeNow = arr.join(':');
         
         militaryTime = timeNow.slice(0, timeNow.length - 2)
   }
     else{
      militaryTime  = s.slice(0, s.length - 2)
     }
   }
   if(s.includes('P')){
      if(arr[0] == '12'){       
         militaryTime = s.slice(0, s.length - 2)
   }
     else { arr[0] = parseFloat(arr[0]) + 12;
      let time = arr.join(':');
      militaryTime = time.slice(0, time.length - 2);
     }
   }
   
   
      
   console.log(militaryTime);
}

console.log(timeConversion('12:54:45AM'))

function gradingStudents(grades) {
   // Write your code here
   for(let i = 0; i < grades.length; i++){
      if (grades[i] >= 38 && grades[i]%5 >= 3)  {
         grades[i] += 5;
         grades[i] -= grades[i]%5;          
             
      }   
   }
   console.log(grades);
}

gradingStudents([73,67,38, 33])

let x = 32;
console.log(x%5)



function ountApplesAndOranges(s, t, a, b, apples, oranges){
   // Write your code here
   let applesOnHouse = 0;
   let orangesOnHouse = 0;
   for(let i = 0; i < apples.length; i++){
       const pos = apples[i] + a;
         if(pos >= s && pos <= t){
            applesOnHouse++;
         }
   }
   for(let i = 0; i < oranges.length; i++){
      const pos = oranges[i] + b;
      if(pos >= s && pos <= t ){
          orangesOnHouse++
      }
   }

}


function kangaroo(x1, v1, x2, v2) {
   // Write your code here
   let max = 10000
   for(let i = 0; i < max; i++){
      if(x1 + v1 == x2 + v2){
         return 'YES'
      }
      else{
         return 'NO'
      }
   }
}
