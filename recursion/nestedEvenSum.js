function nestedEvenSum (obj) {
 let total = 0;

 function helper(obj) {
  for (const key in obj) {
   if (obj[key]%2 ===0) {
    total+= obj[key];
   }

   if (typeof obj[key] === 'object') {
    helper(obj[key])
   }
  }
 }
 helper(obj)
 return total;
}


var obj1 = {
 outer: 2,
 obj: {
   inner: 2,
   otherObj: {
     superInner: 2,
     notANumber: true,
     alsoNotANumber: "yup"
   }
 }
}

var obj2 = {
 a: 2,
 b: {b: 2, bb: {b: 3, bb: {b: 2}}},
 c: {c: {c: 2}, cc: 'ball', ccc: 5},
 d: 1,
 e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10