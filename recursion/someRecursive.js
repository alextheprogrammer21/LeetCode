function someRecursive(arr, cb){
 
 function helper(arr) {

  if (!arr.length) return false;
  
  if (cb(arr[arr.length-1])) return true;

  arr.pop();
  return helper(arr);
 }

 return helper(arr)
}