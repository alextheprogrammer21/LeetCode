var removeDuplicates = function(nums) {
    let j = 1;
    let i = 0;

    while (j < nums.length) {
        if (nums[i] === nums[j]) {
            nums.splice(j,1);
        } else {
            i++;
            j++;
        }
    }
    return nums.length;
};

console.log(removeDuplicates([-1,0,0,0,0,3,3]))