var reverse = function(x) {
 let isNegative = false;
let stringified = x.toString();
if (stringified[0] === '-') {
stringified = stringified.substring(1)
isNegative = true;
}
let reversed = parseInt(stringified.split('').reverse().join(''));

if (isNegative) {
reversed = -reversed;
}
 
if (reversed < -2147483648 || reversed > 2147483647) {
 return 0;
}
return reversed
};

console.log(reverse(123))