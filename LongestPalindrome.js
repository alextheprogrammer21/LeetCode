var longestPalindrome = function(s) {
    //If the string is only one character, then return that one character
    if (s.length === 1) {
        return s;
    }
    //Check to see if a substring is a palindrome
    const checkPalindrome = function(substring) {
        let length = 0;
        //If the palindrome substring is odd amount of letters
        if (substring.length % 2 !== 0) {
            length = Math.trunc(substring.length / 2)
        }
        //If the palindrome substring is even amount of letters 
        if (substring.length %2 === 0) {
            length = (substring.length / 2) - 1
        }
        for (let i = 0; i <= length; i++) {
            ending = substring.length - 1 - i
            if (substring[i] === substring[ending]) {
                continue
            } else {
                return false
            }
        }
        return true;
    }
    
    let longestPalindrome = "";
    longestPalindrome = s[0];
    for (let i = 0; i < s.length; i++) {
        for (let j = i+1; j < s.length; j++) {
            //Check if palindrome
            if (s[i] === s[j]) {
                //If the substring is a palindrome, then if the palindrome length is larger than the previous palindrome, make it the new palindrome
        const substring = s.substring(i, j+1);
                if (checkPalindrome(substring)) {
                    if (substring.length > longestPalindrome.length) {
                        longestPalindrome = substring;
                    }
                }
            }
        }
    }
    return longestPalindrome;
};

console.log(longestPalindrome("babad"))