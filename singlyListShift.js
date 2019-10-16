shift(){
	if(!this.head){
		return undefined
	} 
	let temp = this.head;
	this.head = this.head.next;
	this.length--;
	return temp;
}