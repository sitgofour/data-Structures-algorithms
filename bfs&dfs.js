
// While this code doesn't showcase original thinking, it is something that I am proud of.
//      It is a milestone of sorts, to be able to not only see and understand, but to 
//      implement from scratch a solution to problem. To go from basically no experience
//      with coding to being able to work with and interpret code like this, is an achievement I take pride in.

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
<<<<<<< HEAD


function depthFirstSearch(root) {

    if(root === null) {
        return null;
    }

    result = []

    function traverse(node) {
        if (node.left) {
            traverse(node.left);
        }

        result.append(node.val)

        if (node.right) {
            traverse(node.right);
        }
    }


    traverse(root);
    return result;
}
=======
>>>>>>> 909458ad44013bf84bf865d5a7b3ebb1e799da6f
