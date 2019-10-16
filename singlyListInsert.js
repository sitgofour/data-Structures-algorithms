class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

function insert(index, value){
	if(index < 0 || index > this.length){
		return false;
	} else if(index === this.length) {
		this.push(value);
	} else if(index === 0) {
		this.unshift(value);
	} else{
		let targetNode = this.get(index-1);
		let afterNode = targetNode.next;
		let newNode = new Node(value);
		targetNode.next = newNode;
		newNode.next = afterNode;
		this.length++;
		return true;
	}
}