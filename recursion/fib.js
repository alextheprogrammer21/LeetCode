function fib(num){
 let value = 1;

 if (num < 3) {
  return 1;
 }

 function helper(num, history) {
  if (num === 2) {
   return;
  }
  let temp = value;
  value+=history;
  history = temp;
  helper(num-1,history)
 }

 helper(num, 1);
 return value;
}
