var twoSum = function(nums, target) {
    for(let i =0; i<nums.length-1; i++){
        let j = i+1;
        while(j < nums.length){
            if(nums[i] + nums[j] === target){
            let newArr = [];
            newArr.push(i, j);
            return newArr
        } else {
            j++;
            }
        }
        
    }    
};