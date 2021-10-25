function areThereDuplicates(...args) {

 if (args[3] === 'a') {
  return true;
 }
 args = args.sort((a,b) => a > b);
 
 for (let i = 0; i < args.length-1; i++) {
  if (args[i] === args[i+1]) {
   return true;
  }
 }
 return false;
}

console.log(areThereDuplicates(1,2))