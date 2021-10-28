function reverse(str){
 let reversed = '';

 function helper(str, index) {
  if (index > str.length) {
   return;
  }
  reversed+=str[str.length-index]
  helper(str, index+1)
 }
 helper(str, 1)
 return reversed;
}

console.log(reverse("hello world"))