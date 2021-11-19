var longestCommonPrefix = function(strs) {

 if (!strs) {
  return ""
 }
 if (strs.length === 1) {
  return strs[0]
 }
 let longest = ""
 strs[0].length < strs[1].length ? longest = strs[0] : longest = strs[1]
  for (let i = 0; i <strs.length-1; i++) {
   let j = 0;
   word1 = strs[i]
   word2 = strs[i+1]
   while(j <= longest.length) {
    if (word1[j] !== word2[j] || j === longest.length) {
     longest = longest.slice(0, j);
     break;
    }
    if (word1[j] === word2[j]) {
     j++
    }
   }
  }  
  return longest;
};

console.log(longestCommonPrefix(["flower","flow","flight"]))