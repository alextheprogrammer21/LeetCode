function capitalizeFirst(arr) {
 let result = [];
  let index = 0;

 if (index === arr.length) {
  return result;
 }
  result[0] = arr[index].charAt(0).toUpperCase() + arr[0].slice(1);
  return capitalizeFirst(arr, index+1)
}

capitalizeFirst(['banana'])