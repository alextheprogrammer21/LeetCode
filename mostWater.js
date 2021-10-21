var maxArea = function(height) {
 let mostWater = 0;
    for (let i = 0; i < height.length; i++) {
      for (let j = i+1; j < height.length; j++) {
       let length = j-i;
       let water = Math.min(height[i], height[j]) * length;
       mostWater = water > mostWater ? water : mostWater;
      }
    }
    return mostWater;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))