bfs(){
	
	let queue = [],
	     data = [],
	     node = this.root;

	queue.push(node);
	
	while(queue.length){
		node = queue.shift();
		data.push(node.value);
		if(node.left){queue.push(node.left)}
		if(node.right){queue.push(node.right)}
	}
	return data
}