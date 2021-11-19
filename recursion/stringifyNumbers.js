function stringifyNumbers(obj) {
 let result = {};
 function helper(obj, result) {
 for (const key in obj) {
  if (typeof obj[key] === 'number') {
   result[key] = obj[key].toString();
  } else if (typeof obj[key] === 'object') {
   result[key] = {}
   helper(obj[key], result[key])
  } else {
   result[key] = obj[key];
  }
 }
}
helper(obj, result)
result.test=[]
result['data']['val'] = 10;
return result;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
console.log(stringifyNumbers(obj))
console.log(obj)


/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}


*/