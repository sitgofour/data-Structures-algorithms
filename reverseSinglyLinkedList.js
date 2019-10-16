function reverseSinglyLinkedList(){
	if(!this.head){
		return undefined;
	} else {
		for(let i =0; i < this.length; i++){
			if(this.head){
				this.head = this.tail
			}
		}
		let nextNode = this.next;
		nextNode.next = this;
	}
}


23 => 11 => 4 => 65 => 18 => 2

23 <= 11 <= 4 <= 65 <= 18 <= 2