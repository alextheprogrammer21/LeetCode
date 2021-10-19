var myAtoi = function(s) {
   //Get rid of leading whitespace
   s = s.trim();
   
   //Check if negative or positive
   let isNegative = false;
   if (s[0] === '-') {
    isNegative === true;
   }
   
   //Remove all non integers 
   const arr1 = [];
   for (let i = 0; i < s.length; i++) {
    const digit = s[i];
    if (parseInt) {
     arr1.push(digit)
    } else {
     break;
    }
   }

   //Convert to Integer 
   let intConvert = parseInt(arr1.join(''))
   
   //Check if Negative 
   if (isNegative) {
    intConvert = -intConvert;
   }

   //Check if in 32-bit signed int range 
   if (intConvert > 2**31 - 1) {
    intConvert = 2**31 - 1;
   }
   if (intConvert < (-2)**31) {
    intConvert = (-2)**31;
   }

   //Return
   if (intConvert) {
    return intConvert;
   } else {
    return 0;
   }
};
