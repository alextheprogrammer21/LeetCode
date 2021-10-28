function productOfArray(arr) {
    let sum = 1;

    if (arr.length === 0) {
     return arr[0];
    }
 function helper(arr) {
  if (arr.length < 1) {
   return;
  }
  sum *= arr[arr.length-1];
  arr.pop();
  helper(arr);
 }
 helper(arr);
 return sum;
}

console.log(productOfArray([1,2,3]))