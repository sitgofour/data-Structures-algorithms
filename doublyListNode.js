class Node{
	constructor(val){
		this.val = val;
		this.next = null;
		this.prev = null;	 
	}
}

class DoublyLinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
}


push(val){
	let node = new Node(val);
	if(!this.head){
		this.head = node;
		this.tail = node;
	} else {
		let oldTail = this.tail; 
		let newTail = node;

		oldTail.next = newTail;
		newTail.prev = oldTail;
		this.tail = newTail;

		this.length++;
		return this;
	}
	
}

pop(){
	if(!this.head){
		return undefined
	} else {
		let cutTail = this.tail;
		if(this.length === 1){
			this.head = null;
			this.tail = null;
		} else {
			this.tail = this.tail.prev;
			this.tail.next = null;
			cutTail.prev = null;
		}
		this.length--;
		return cutTail;
	}
}

shift(){
	if(this.length === 0){
		return undefined;
	} else {
		let oldNode = this.head;
		if(this.length === 1){
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldNode.next;
			this.head.prev = null;
			oldNode.next = null;
		}
		this.length--;
		return oldNode;
	}
}

unshift(val){
	let newNode = new Node(val);
	if(!this.head){
		this.head = newNode;
		this.tail = newNode;
	} else {
		oldHead = this.head;
		oldHead.prev = newNode;
		this.head = newNode;
		this.head.next = oldHead;

		//colt's solution

		// this.head.prev = newNode;
		// newNode.next = this.head;
		// this.head = newNode;
	} 
	this.length++;
	return this;
}

get(index){
	if(index < 0 || index >= this.length){
		return null;
	} else {
		let counter = 0;
		if(index <= (this.length-1)/2){
			while(counter !== index){
				this.head = this.head.next
				counter++
			} return this.head;
		} else {
			let counter = this.length-1;
			while(counter !== index){
				let currentNode = this.tail;
				this.tail = currentNode.prev;
				counter--;
			} return this.tail;
		}
	}
}

set(index, value){
	let foundNode = this.get(index);
	if(foundNode){
		foundNode.val = value;
		return true;
	}
	return false;
}


insert(index, value){
	if(index < 0 || index > this.length){
		return false;
	} else if(index === 0){
		return this.unshift(value);
	} else if(index === this.length){
		return this.push(value);
	} else {
		let newNode = new Node(value);
		let nodeBefore = this.get(index-1);
		let nodeAfter = nodeBefore.next;
		nodeBefore.next = newNode;
		newNode.prev = nodeBefore;
		newNode.next = nodeAfter;
		nodeAfter.prev = newNode;
		this.length++;
		return newNode;
		
	}
}

remove(index){
	if(index < 0 || index >= this.length) return undefined;
	if(index === 0) return this.shift();
	if(index === length-1) return this.pop();

	let targetNode = this.get(index);
	let beforeTarget = targetNode.prev;
	let afterTarget = targetNode.next;

	beforeTarget.next = afterTarget;
	targetNode.prev = null;
	targetNode.next = null;
	afterTarget.prev = beforeTarget;

	this.length--;
	return targetNode;
}


