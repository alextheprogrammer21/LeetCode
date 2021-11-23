var generateParenthesis = function(n) {
    
    const solution = [];

    function helper(left, right, str) {
        if (left > right) return;
        if (!left && !right) solution.push(str)
        if (left > 0) helper(left-1, right, '(')
        if (right > 0) helper(left, right-1, ')' )
    }
    helper(n,n,'')
    return solution;
};

console.log(generateParenthesis(3))