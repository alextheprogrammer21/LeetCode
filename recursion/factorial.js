function factorial(num){
   let total = 1;

   if (factorial < 1) {
    return 1;
   }
   function helper(num) {
    if (num < 2) {
     return;
    }
    total = total * num;
    helper(num-1)
   }
   helper(num) 
   return total;
}

console.log(factorial(7))