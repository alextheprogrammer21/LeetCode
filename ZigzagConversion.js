var convert = function(s, numRows) {
    let y = 1;
    let isZagging = true; 
    const rows = {};
    
    if (s.length < 2) {
        return s;
    }

    if (numRows < 2) {
        return s;
    }
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
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
        
                if (y > numRows) {
            isZagging = false;
            y = y-2;
        }


        if (!isZagging && y === 1) {
            isZagging = true;
            
        }
    }
    const keys = Object.keys(rows);
    let finalString = "";
    console.log(keys)
    keys.forEach((key) => {
    finalString += rows[key]
    console.log(rows[key])
})
    return finalString;
};

