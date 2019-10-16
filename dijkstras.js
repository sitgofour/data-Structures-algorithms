function dijkstras(startingVertex, endingVertex){
    const distances = {};
    this.adjacencyList.forEach( vertex => {
        distances[vertex] = Infinity;
    });
    this.adjacencyList[startingVertex] = 0;
}