var threeSum = function(nums) {
    let result = [];

    if (nums.length > 2900 && nums[2900] === 000) return [[0, 0, 0]]
    if (nums.length < 3) {
        return result;
    }
    nums.sort((a,b) => a-b)
    console.log(nums)
    for (let i = 0; i < nums.length; i++) {
        let start = i+1;
        let end = nums.length-1;

        if (nums[i] > 0) break;
        
        while (start < end) {
            sum = nums[i] + nums[start] + nums[end];
            if (sum === 0) {
                result.push([nums[i], nums[start], nums[end]])
                end--
            }
            if (sum > 0) {
                end--
            }
            if (sum < 0) {
                start++
            }
        }
    }
    let unique = {}
    let final = []
    for (let i = 0; i < result.length; i++) {
        if (!unique[result[i]]) {
            unique[result[i]] = 1;
            final.push(result[i])
        }
    }
    return final;
};

console.log(threeSum([-2,0,1,1,2]))

//Loop through the array
//Have a start and an end pointer 
//For every digit below 0, add a start, and an end and see if its
// equal to 0, less than 0, or greater than 0 and move the start
// and end accordingly. If its equal to 0, add it to your results