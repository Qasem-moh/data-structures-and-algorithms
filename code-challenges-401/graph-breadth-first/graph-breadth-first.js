class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }


    breadthFirst(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);


            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }

}


let graph = new Graph();

graph.addVertex("Pandora")
graph.addVertex("Arendelle")
graph.addVertex("Metroville")
graph.addVertex("Monstropolis")
graph.addVertex("Narnia")
graph.addVertex("Naboo")

graph.addEdge("Pandora", "Arendelle")
graph.addEdge("Arendelle", "Metroville")
graph.addEdge("Arendelle", "Monstropolis")
graph.addEdge("Metroville", "Monstropolis")
graph.addEdge("Metroville", "Narnia")
graph.addEdge("Metroville", "Naboo")

console.log(graph.breadthFirst("Pandora"))

module.exports = Graph;