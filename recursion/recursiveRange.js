function recursiveRange(num){
   let sum = 0;

   function helper(num) {
    if (num === 0) {
     return;
    }
    sum += num;
    num--;
    helper(num);
   }
   helper(num);
   return sum;
}

console.log(recursiveRange(10))