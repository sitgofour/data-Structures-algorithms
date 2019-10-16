function remove(index){
	if(index < 0 || index >= this.length){
		return undefined;
	} else if(index === this.length-1){
		this.pop();
	} else if(index === 0){
		this.shift(index)
	} else {
		let beforeNode = this.get(index-1);
		let middleNode = beforeNode.next;
		beforeNode.next = middleNode.next;
		this.length++;
		return middleNode;
	}
}