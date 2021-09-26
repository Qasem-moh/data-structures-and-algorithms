let Graph = require('./graph-breadth-first');

describe("a breadth-first traversal on a graph.", () => {


    it("Implement a breadth-first traversal on a graph.", () => {
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
        expect(graph.breadthFirst("Pandora")).toEqual(['Pandora',
            'Arendelle',
            'Metroville',
            'Monstropolis',
            'Narnia',
            'Naboo']
        );
    })

})
