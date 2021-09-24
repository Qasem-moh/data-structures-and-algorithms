'use strict';

class Vertex {
    constructor(value) {
        this.value = value;
    }
}

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

    // createVertex(value) {
    //   const vertex = new Vertex(value);
    //   this.adjacencyList.set(vertex, []);
    // }

    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
        return this.adjacencyList.get(vertex);
    }

    addDirectedEdge(start, end, weight) {
        if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
            throw new Error('NON-EXISTENT VERTEX SITUATION 😱');
        }

        const edge = new Edge(end, weight || null);
        this.adjacencyList.get(start).push(edge);
    }

    getVertices() {
        if (!this.size()) throw new Error('GRAPH IS EMPTY 😱');

        const collection = [];
        for (let k of this.adjacencyList.keys()) {
            // console.log(k.value);
            collection.push(k.value);
        }
        return collection;
    }

    getUniqueVertices() {
        if (!this.size()) throw new Error('GRAPH IS EMPTY 😱');

        const collection = new Set();
        for (let k of this.adjacencyList.keys()) {
            // console.log(k);
            collection.add(k.value);
        }
        return collection;
    }

    getNeighbors(vertex) {
        // console.log(vertex);
        return this.adjacencyList.get(vertex).length
            ? this.adjacencyList.get(vertex)
            : null;
    }

    size() {
        return this.adjacencyList.size;
    }

    bfs(start) {
        // to prevent an infinite loop
        const visited = new Set();

        const queue = [start];

        while (queue.length) {
            const vertex = queue.shift();

            const neighbors = this.adjacencyList.get(vertex);
            // console.log(neighbors);

            for (const neighbor of neighbors) {
                // console.log(neighbor.vertex);
                if (!visited.has(neighbor.vertex)) {
                    visited.add(neighbor.vertex);
                    queue.push(neighbor.vertex);
                }
            }
        }

        return [...visited];
    }

    dfs(start, visited = new Set()) {
        visited.add(start);

        const destinations = this.adjacencyList.get(start);

        for (const destination of destinations) {
            if (!visited.has(destination.vertex)) {
                this.dfs(destination.vertex, visited);
            }
        }

        console.log(visited);
        // the return statement will execute multiple times
        // ... returning multiple values, but only the last one
        // ... will be truly returned (captured)

        return [...visited];
    }
}

// ------------------- DFS
// const a = 'a';
// const b = 'b';
// const c = 'c';
// const d = 'd';
// const e = 'e';
// const f = 'f';
// const h = 'h';
// const g = 'g';

// const myGraph = new Graph();

// myGraph.addVertex(a);
// myGraph.addVertex(b);
// myGraph.addVertex(c);
// myGraph.addVertex(d);
// myGraph.addVertex(e);
// myGraph.addVertex(f);
// myGraph.addVertex(h);
// myGraph.addVertex(g);

// myGraph.addDirectedEdge(a, b);
// myGraph.addDirectedEdge(a, d);

// myGraph.addDirectedEdge(b, c);
// myGraph.addDirectedEdge(b, d);
// myGraph.addDirectedEdge(b, a);

// myGraph.addDirectedEdge(c, g);
// myGraph.addDirectedEdge(c, b);

// myGraph.addDirectedEdge(g, c);

// myGraph.addDirectedEdge(d, a);
// myGraph.addDirectedEdge(d, b);
// myGraph.addDirectedEdge(d, e);
// myGraph.addDirectedEdge(d, h);
// myGraph.addDirectedEdge(d, f);

// myGraph.addDirectedEdge(e, d);

// myGraph.addDirectedEdge(h, f);
// myGraph.addDirectedEdge(h, d);

// myGraph.addDirectedEdge(f, d);
// myGraph.addDirectedEdge(f, h);

// console.log(myGraph.dfs(a));

// ------------------- BUSINESS TRIP

// Determine whether the trip is possible with direct flights, and how much it would cost
// Determine if the vertices are connected as a course, and the sum of the edges along the course
/**
 *
 * @param {Graph} graph
 * @param {Array} cities
 */
function businessTrip(graph, cities) {
    let totalWeight = 0;
    let isPossible = false;
    let isPossibleArray = new Array(cities.length - 1).fill(false);
    for (let i = 0; i < cities.length - 1; i++) {
        let neighbors = graph.adjacencyList.get(cities[i]);

        // if one vertex along the course does not have neighbors
        // or is not connected to the next target vertex
        if (!neighbors) {
            totalWeight = 0;
            isPossible = false;
            break;
        }

        for (const neighbor of neighbors) {
            if (neighbor.vertex === cities[i + 1]) {
                isPossibleArray[i] = true;
                totalWeight += neighbor.weight;
            }
        }
    }

    if (isPossibleArray.includes(false)) {
        totalWeight = 0;
        isPossible = false;
    } else {
        isPossible = true;
    }

    return `${isPossible}, $${totalWeight}`;
}

const g = new Graph();

const cities = ['Metroville', 'Pandora'];
const cities2 = ['Arendelle', 'Monstropolis', 'Naboo'];
const cities3 = ['Naboo', 'Pandora'];
const cities4 = ['Narnia', 'Arendelle', 'Naboo'];

const Pandora = 'Pandora';
const Metroville = 'Metroville';
const Arendelle = 'Arendelle';
const Monstropolis = 'Monstropolis';
const Naboo = 'Naboo';
const Narnia = 'Narnia';

g.addVertex(Pandora);
g.addVertex(Metroville);
g.addVertex(Arendelle);
g.addVertex(Monstropolis);
g.addVertex(Naboo);
g.addVertex(Narnia);

g.addDirectedEdge(Pandora, Arendelle, 150);
g.addDirectedEdge(Arendelle, Pandora, 150);

g.addDirectedEdge(Pandora, Metroville, 82);
g.addDirectedEdge(Metroville, Pandora, 82);

g.addDirectedEdge(Arendelle, Metroville, 99);
g.addDirectedEdge(Metroville, Arendelle, 99);

g.addDirectedEdge(Arendelle, Monstropolis, 42);
g.addDirectedEdge(Monstropolis, Arendelle, 42);

g.addDirectedEdge(Metroville, Narnia, 37);
g.addDirectedEdge(Narnia, Metroville, 37);

g.addDirectedEdge(Metroville, Naboo, 26);
g.addDirectedEdge(Naboo, Metroville, 26);

g.addDirectedEdge(Metroville, Monstropolis, 105);
g.addDirectedEdge(Monstropolis, Metroville, 105);

g.addDirectedEdge(Monstropolis, Naboo, 73);
g.addDirectedEdge(Naboo, Monstropolis, 73);

g.addDirectedEdge(Naboo, Narnia, 250);
g.addDirectedEdge(Narnia, Naboo, 250);

console.log(businessTrip(g, cities));
console.log(businessTrip(g, cities2));
console.log(businessTrip(g, cities3));
console.log(businessTrip(g, cities4));

console.log(g.dfs('Pandora'))

//------------------------------------------------\\
//------------------------------------------------\\
//------------------------------------------------\\

// const g = new Graph();

// const zero = new Vertex(0);
// const one = new Vertex(1);
// const two = new Vertex(2);
// const twoToo = new Vertex(2);
// const three = new Vertex(3);
// const four = new Vertex(4);
// const fourToo = new Vertex(4);
// const five = new Vertex(5);

// g.addVertex(zero);
// g.addVertex(one);
// g.addVertex(two);
// g.addVertex(twoToo);
// g.addVertex(three);
// g.addVertex(four);
// g.addVertex(fourToo);
// g.addVertex(five);

// g.addDirectedEdge(zero, two);
// g.addDirectedEdge(two, three);
// g.addDirectedEdge(two, four);
// g.addDirectedEdge(three, five);
// g.addDirectedEdge(four, five);
// g.addDirectedEdge(one, three);

// console.log(g.adjacencyList.get(one));
// console.log(g.size());
// console.log(g.getVertices());
// console.log(g.getUniqueVertices());
// console.log(g.getNeighbors(three));

// console.log(g.bfs(zero));

module.exports = {
    Graph,
    Vertex,
    Edge,
    businessTrip
};
