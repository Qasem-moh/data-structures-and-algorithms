'use strict';
class Edge {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }
    addEdge(start, end, weight) {
        if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
            console.log('VERTEX DOES NOT EXIST');
            return;
        }
        const adjacencies = this.adjacencyList.get(start);
        adjacencies.push(new Edge(end, weight));
    }

    getNeighbours(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            console.log('VERTEX DOES NOT EXIST');
            return;
        }
        return this.adjacencyList.get(vertex);
    }

}


function dfs(graph, vertex) {
    const visitedVertices = new Set();
    visitedVertices.add(vertex);
    const traverse = (current, visited) => {

        visited.add(current);

        const neighbors = graph.getNeighbours(current);

        for (let neighbor of neighbors) {
            if (!visited.has(neighbor.vertex)) {
                traverse(neighbor.vertex, visited);
            }
        }
    };
    traverse(vertex, visitedVertices);
    return Array.from(visitedVertices);
}

let graph = new Graph();
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("F")
graph.addVertex("E")
graph.addVertex("H")
graph.addVertex("G")

graph.addEdge("A", "B")
graph.addEdge("A", "D")
graph.addEdge("B", "C")
graph.addEdge("B", "D")
graph.addEdge("D", "E")
graph.addEdge("D", "H")
graph.addEdge("F", "H")
graph.addEdge("C", "G")
graph.addEdge("D", "F")

console.log('dfs', dfs(graph, 'A'));

module.exports = { Graph, dfs };