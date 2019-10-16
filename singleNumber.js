singleNumber(nums){
	for(let i = 0; i < nums.length; i++){
		let temp = nums[i];
		let j = i+1
		while(j < nums.length)
		if(temp === nums[j]){
			j++
		} else{
			return temp;
		}
}