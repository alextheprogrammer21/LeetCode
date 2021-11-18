function stringSearch(str, substr) {
 //Get the reference table to know how much of a suffix is equal to the prefix
 let table = [0];
 let j = 0;
 for (let i = 1; i < substr.length; i++) {
  if (substr[i] !== substr[j]) {
   j = 0;
  }
  table.push(j)
  j++;
 }
 //Go through the string and find if the substring appears
 let k = 0;
 for (let i = 0; i < str.length; i++) {
   if (str[i] === substr[k]) {
    k++;
    if (k === substr.length) {
     return true;
    }
  } else {
   k > 0 ? k = table[k-1] : k=0;
   if (k > 0) {
    i = i-2;
   }
  }
 }
 return false;
}

console.log(stringSearch("abcxabcdabxabcdabcdabc", "abcdabcy"))