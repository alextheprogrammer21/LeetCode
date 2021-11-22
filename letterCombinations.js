/*
Create a vector from 2-9 that has each letter 
Then whatever numbers are chosen, loop through the vector
to get the combinations
*/



var letterCombinations = function(digits) {

    digits = digits.toString().split('');
    const vector = {
        '2': ['a','b','c'],
        '3': ['d','e','f'],
        '4': ['g','h','i'],
        '5': ['j','k','l'],
        '6': ['m','n','o'],
        '7': ['p','q','r','s'],
        '8': ['t','u','v'],
        '9': ['w','x','y','z']
    }
let results = [];
    
    function helper(i) {
        if (i === digits.length) {
            return;
        }
        for (let j = 0; j < vector[digits[i]].length; j++) {
            let combo = vector[digits[i]][j] + helper(i+1)
            results.push(combo)
        }
    }
    helper(0);
    return results;
};

console.log(letterCombinations(23))