function maxSubarraySum(arr, num){

 if (num > arr.length) {
  return null;
 }
 let sum = 0;
 let max = 0;
 for (let i = 0; i < arr.length; i++) {
  while (i < num) {
   sum = sum+arr[i];
   i++
   max = sum;
  }
  
  sum = sum+arr[i]-arr[i-num];

  if (sum > max) {
   max = sum;
  }
 }
 return max;
}
