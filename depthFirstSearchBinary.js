function depthFirst(){
	let data = [],
	let current = this.root;

	traverse(node){
		data.push(node.value);
		if(node.left) traverse(node.left);
		if(node.right) traverse(node.right);
	}

	traverse(current);
	return data;
}