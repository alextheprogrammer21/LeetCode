function averagePair(arr, target){
 target = target*2;
 let start = 0; 
 let end = arr.length-1;
 while (start < end) {
  sum = arr[start] + arr[end]
  if (sum === target) {
   return true;
  }
  if (sum > target) {
   end--;
  }
  if (sum < target) {
   start++;
  }
 }
 return false;
}
