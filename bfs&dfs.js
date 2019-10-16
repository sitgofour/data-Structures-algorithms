
function dfsPreOrder(){
    let data = [];

    function traverse(node){
        data.push(node);
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
}

function dfsPostOrder(){
    let data = [];

    function traverse(node){
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        data.push(node);
    }
    traverse(this.root);
    return node;
}

function dfsInOrder(){
    let data = [];

    function traverse(node){
        if(node.left) traverse(node.left);
        data.push(node);
        if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return node;
}


function bfs(){
    let queue = [];
    let data = [];
    let node = this.root;

    queue.push(node);

    while(queue.length){
        node = queue.shift();
        data.push(node);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    return data;

}