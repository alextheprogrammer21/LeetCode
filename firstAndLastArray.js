var searchRange = function(nums, target) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            if (result.length === 0) result.push(i)
            if (result.length === 1) {
                result.push(i)
            }
            if (result.length === 2) {
                result[1] = i;
            }
        }
    }
    if (result.length === 0) {
        result.push(-1)
        result.push(-1)
    }

    if (result.length === 1) {
        result.push(-1)
    }

 return result;
};