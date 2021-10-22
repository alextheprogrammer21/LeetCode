function validAnagram(s1, s2){

 //Return false if string lengths are different
 if (s1.length !== s2.length) {
  return false;
 }

 const firstWord = {}
 const secondWord = {}

 for (let i = 0; i < s1.length; i++) {
  const char1 = s1[i]; const char2 = s2[i];
  firstWord[char1] ? firstWord[char1]++ : firstWord[char1] = 1;
  secondWord[char2] ? secondWord[char2]++ : secondWord[char2] = 1;
 }

 for (const key in firstWord) {
  if (!secondWord[key]) {
   return false;
  }
  if (secondWord[key] !== firstWord[key]) {
   return false;
  }
 }
 return true;
}
