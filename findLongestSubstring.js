function findLongestSubstring(str){
 let j = 0;
 let length = 0;
 let seen = {};
 let removal = 0;
 for (let i = 0; i < str.length; i++) {
  let char = str[i]
  if (seen[char]) {

   j = Math.max(j, seen[char]);;
  }
  length = Math.max(length, i-j + 1)
  seen[char] = i + 1;
 }
 return length;
}

console.log(findLongestSubstring('longestsubstring'))