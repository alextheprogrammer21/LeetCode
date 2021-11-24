var strStr = function(haystack, needle) {
    if (!needle) return 0;
    if (needle === haystack) return 0;
    //Create table
    let table = [0]
    let j = 0;
    for (let i = 1; i < needle.length; i++) {
        if (needle[i] !== needle[j]) {
            j = 0;
        }
        if (needle[i] === needle[j]) {
            j++
        }
        table.push(j)
    }
    j = 0;
    for (let i = 0; i <= haystack.length; i++) {
        if (j === needle.length) {
            return i-j;
        }
        if (haystack[i] !== needle[j]) {
            j = table[j]
        }
        if (haystack[i] === needle[j]) {
            j++;
        }
    }
    return -1;
};