/* 
Create an object that contains all the roman numerals 
for loop through the string
Check the string before for combos, if not combo, then do a singular
*/

var romanToInt = function(s) {
    const roman = {
     'I': 1,
     'V' : 5,
     'X' : 10,
     'L' : 50,
     'C' : 100,
     'D' : 500,
     'M' : 1000
    }

    const combos = {
     'IV' : 4,
     'IX' : 9,
     'XL' : 40,
     'XC' : 90,
     'CD' : 400,
     'CM' : 900
    }

    s = s.toUpperCase();
    let total = 0;

    if (s.length === 1) {
     total += roman[s[0]];
    }
    for (let i = 1; i < s.length; i++) {
     let combo = s[i-1] + s[i];
     if (combos[combo]) {
      i === 1 ? total+= combos[combo] : total += combos[combo] - roman[s[i-1]]
      continue;
     } 
     if (i === 1) {
      total = total+roman[s[0]]
     }
     total = total+
    roman[s[i]]
    }
    return total;
};

console.log(romanToInt('MCMXCIV'))