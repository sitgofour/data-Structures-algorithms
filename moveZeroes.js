var moveZeroes = function(nums) {
    let i = nums.length;
    while(i < nums.length){
        let j = 0;
        if(nums[j] === 0){
            nums.push(nums.splice(1, i));
        }
    }
};