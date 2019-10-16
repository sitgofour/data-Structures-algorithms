class Graph{
    constructor(){
        this.adjacencylist = {};
    }
    addVertex(vertex){
        if(!this.adjacencylist[vertex]){ 
            this.adjacencylist[vertex] = [];
        }
    }
    addEdge(vertex1, vertex2){
        this.adjacencylist[vertex1].push(vertex2);
        this.adjacencylist[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2){
        let v1index = this.adjacencylist[vertex1].indexOf(vertex2);
        let v2index = this.adjacencylist[vertex2].indexOf(vertex1);

        this.adjacencylist[vertex1].splice(v1index, 1);
        this.adjacencylist[vertex2].splice(v2index, 1);

    }
    removeVertex(vertex){
        this.adjacencylist[vertex].forEach(function(v){
            this.removeEdge(vertex, v);
        });
        delete this.adjacencylist[vertex];
    }
}


class Graph{
    constructor(){
        this.adjacencylist = {};
    }
    addVertex(vertex){
        if(!this.adjacencylist.vertex) this.adjacencylist.vertex = [];
    }
}