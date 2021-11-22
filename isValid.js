var isValid = function(s) {

    if (s.length < 1) return true;
    const bracket = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }

    let heap = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (bracket[char]) {
            heap.push(bracket[char])
        } else {
            if (heap.pop() !== char) return false
            
        }
    }
    return (heap.length === 0 ? true : false)
};

console.log(isValid('()'))