var convert = function(s, numRows) {
 let y = 0;
 let isZagging = true; 
 const rows = {};
 
 for (let i = 0; i < s.length; i++) {
     const s[i] = char;
     
     if (y >= numRows) {
         isZagging = false;
         y--;
     }
     if (y === 0) {
         isZagging = true;
     }
     
     if (isZagging) {
         if (rows[y]) {
             rows[y] += char;
         } else {
         rows[y] = char;
         }
         y++
     }
     if (!isZagging) {
         if (rows[y]) {
             rows[y] += char;
         } else {
         rows[y] = char;
         }
         y--;
     }
     
 }
 //Turn the final object into a single return string
 //Check to see if all your y-- and y++ things are correctly numbered
};