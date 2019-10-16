unshift(val){
	let newNode = new Node(val);
	if(!this.head){
		this.head = newNode;
		this.tail = this.head;
	}
	let oldHead = this.head;
	newNode.next = oldHead;
	this.head = newNode;
	this.length++;
	return temp;
}