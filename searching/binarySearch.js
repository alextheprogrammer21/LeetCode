function binarySearch(arr, val){
 let start = 0;
 let end = arr.length - 1;
 let middle = Math.floor((start + end) / 2);

 while (middle !== val && start <= end) {
  if (arr[middle] > val) {
   end = middle;
   middle = Math.floor((start + end) / 2);
  } else if(arr[middle] < val){
   start = middle;
   middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === val) {
   return middle;
  }
 }
 return -1;
}

console.log(binarySearch([1,2,3,4,5], 2))