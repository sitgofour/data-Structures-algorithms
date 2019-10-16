function set(index, value){
	let foundValue = this.get(index);
	if(foundValue){
		foundValue.val = value;
		return true;
	}
	return false;
}