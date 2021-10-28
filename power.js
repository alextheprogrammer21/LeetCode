function power(num, pow){
   let total = 1;

   if (pow === 0) return 1;
   function helper(num, pow) {
    if (pow === 1) {
     return total;
    }
    total = total * num;
    helper(num, pow-1);
   }

   helper(num, pow+1)
   return total;
}

console.log(power(5, 3))