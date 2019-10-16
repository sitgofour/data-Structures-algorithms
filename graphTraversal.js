//Recursive solution

function dfsGraph(vertex){
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    function inner(vertex){
        if(!vertex){
            return;
        } 
        visited[vertex] = true;
        result.push(vertex);
        adjacencyList[vertex].forEach((v) => {
            if(!visited[v]){
                return inner(v);
            }
        })
    }
    inner(vertex);
    return result;
}


//iterative soltion

function dfsIterator(vertex){
    const stack = [];
    const result = [];
    const visited = {};

    stack.push(vertex);
    visited[vertex] = true;

    while(stack.length){
        let v = stack.pop();
        if(!visited[v]){
            visited[v] = true;
            result.push(v);
            visited[v].forEach( (neighbor) => stack.push(neighbor) );
        }
    }
    return result;
} 



//breadth-first graph traversal


function bfsGraph(startingVertex){
    const queue = [];
    const result = [];
    const visited = {};

    queue.push(startingVertex);
    visited[startingVertex] = true;

    while(queue.length){
        let v = queue.shift();
        if(!visited[v]){
            visited[v] = true;
            result.push(v);
            visited[v].forEach( (neighbor) => queue.push(neighbor) );
        }
    }
    return result;
}