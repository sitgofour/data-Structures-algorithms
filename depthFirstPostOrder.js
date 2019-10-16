function depthFirst(){
	let data = [],
	let current = this.root;

	traverse(node){
		if(node.left) traverse(node.left);
		if(node.right) traverse(node.right);

		data.push(node.value);

	}

	traverse(current);
	return data;
}