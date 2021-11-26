var search = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let int = nums[i];

        if (int === target) {
            return i;
        }
    }
    return -1;
};