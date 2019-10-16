class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	} 
	push(val){
		if(this.head === null){
			this.head = val;
			this.tail = val;
			this.length++;
		} else {
			this.tail = val;
			this.length++;
		}
	}
}