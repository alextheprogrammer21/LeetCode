const minSubArrayLen = function(arr, max) {
 let sum = 0;
 let length = arr.length;
 let min = arr.length;
 let j = 0;
 for (let i = 0; i < arr.length; i++) {
  while (sum < max) {
   sum = sum + arr[j];
   j++
   if (j-i === arr.length) {
    return 0;
   }
  }


  if (j <= arr.length) {
  length = j-i;
  sum = sum-arr[i]
  }
  if (length < min) {
   min = length;
  }
 }
 return min;
}

console.log(minSubArrayLen([2,3,1,2,4,3],7))