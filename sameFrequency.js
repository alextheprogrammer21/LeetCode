function sameFrequency(int1, int2){
 int1 = int1.toString(); int2 = int2.toString();
 if (int1.length !== int2.length) {
  return false;
 }

 const obj = {};
 for (let i = 0; i < int1.length; i++) {
  let char = int1[i];
  obj[char] ? obj[char]++ : obj[char] = 1;
 }

 for (let i = 0; i < int2.length; i++) {
  let char = int2[i];
  obj[char] ? obj[char]-- : obj[char] = 1;
 }

 for (const key in obj) {
  if (obj[key]) {
   return false;
  }
 }
 return true;
}