class NewNode {
	constructor() {
		this.val = null;
		this.next = null;
	}
}

class SinglyLinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	} 
	pop(){
		var current = this.head;
		while(current){
			if(!this.head){
			return undefined;
			} else {
				current = current.next
			} 
		}
			
	}