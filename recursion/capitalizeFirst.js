function capitalizeFirst(arr) {
  let result = [];
  let index = 0;
  function helper(index, arr) {
    if (index === arr.length) {
      return;
    }
    let word = arr[index].charAt(0).toUpperCase() + arr[index].slice(1);
    result.push(word)
    helper(index+1, arr)
  }
  helper(index, arr)
  return result;
}

console.log(capitalizeFirst(['banana','hello','noobie']))