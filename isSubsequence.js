function isSubsequence(s1, s2) {
 const max = s1.length - 1;
 let j = 0;

 for (let i = 0; i < s2.length; i++) {
  if (s1[j] === s2[i]) {
   j++
  }
  if (j > max) {
   return true;
  }
 }
 return false;
}

console.log(isSubsequence("sing", "sting"))