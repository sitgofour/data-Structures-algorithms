

function breadthFirstSearch(root) {
    let queue = [];
    let visited = [];

    queue.push(root);

    while(queue.length) {
        let node = queue.shift();

        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
        visited.push(node);
    }

    return visited;
}