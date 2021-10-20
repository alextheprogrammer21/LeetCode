/* Loop through the string. 
Check if each letter matches in the proper index or if there's a . 
If there is a star, still good to go
If there is more than two repeating characters, check if there's a
star and then let it pass 

*/

var isMatch = function(s, p) {
 let lengthTest = p.split('').filter(char => char !== '*').length;
 let j = 0;
    for (let i = 0; i < s.length; i++) {

     if (s[i] === p[j] || p[j] === '.') {
      j++;
      continue
     } else if (p[j] === '*' && (p[j-1] === s[i] || p[j-1] === '.')) {
      for (let k = i+1; k < s.length; k++) {
       if (s[i] !== s[k]) {
        i = k-1;
        break;
       }
       continue
      }
      j++
      continue
     } else if (p[j+1] === '*') {
      lengthTest--;
      j = j+2;
      i--;
      continue;
     } else {
      return false;
     }
    }

    slast = s.length-1; plast = p.length-1;
    if (s[slast] !== p[plast] && (p[plast] !== '.' && p[plast] !== '*')) {
     return false;
    }

    if (lengthTest > s.length) {
     console.log(lengthTest)
     return false
    }

    return true;
};

