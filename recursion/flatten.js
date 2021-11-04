function flatten(arr) {
 let result = [];
 function helper(arr) {
  for (let i = 0; i < arr.length; i++) {
   (Array.isArray(arr[i])) ? helper(arr[i]) : result.push(arr[i])
  }
 }
helper(arr);
return result;
}

console.log(flatten([1, 2, 3, [4, 5] ]))