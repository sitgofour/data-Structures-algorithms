function rotateArray(nums, k){
	while(k > 0){
		nums.unshift(nums.pop());
		k--;
	}
}




