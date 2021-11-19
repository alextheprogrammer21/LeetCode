function capitalizeWords (arr) {
 const result = [];
let index = 0;
 function helper(arr, index) {
  if (index === arr.length) {
   return;
  }
  result.push(arr[index].toUpperCase())
  helper(arr, index+1)
 }
 helper(arr,index)
 return result;
}

console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']))