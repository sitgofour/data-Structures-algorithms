function RemoveDuplicates(nums){
	for(let i = 0; i < nums.length-1; i++){
		if(nums[i] === nums[i+1]){
			nums.splice(i, 1);
		} else i++;
	} 
	return nums.length;
	console.log(nums.length);
}