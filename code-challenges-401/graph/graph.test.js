'use strict';

const { Vertex, Graph, businessTrip } = require('./graph');

describe(':::: GRAPH ::::', () => {
    let g, zero, one, two, twoToo, three, four, fourToo, five;
    beforeEach(() => {
        g = new Graph();

        zero = new Vertex(0);
        one = new Vertex(1);
        two = new Vertex(2);
        twoToo = new Vertex(2);
        three = new Vertex(3);
        four = new Vertex(4);
        fourToo = new Vertex(4);
        five = new Vertex(5);
    });

    test('#addVertex() adds 🟢 vertex properly', () => {
        expect(g.addVertex(zero)).toEqual([]);
    });

    test('#addDirectedEdge() adds 🟢 edge properly', () => {
        g.addVertex(zero);
        g.addVertex(one);
        g.addDirectedEdge(zero, one, '🦔');
        expect(g.adjacencyList.get(zero)[0].vertex.value).toEqual(1);
        expect(g.adjacencyList.get(zero)[0].weight).toEqual('🦔');
    });

    test('#addDirectedEdge() throws 🔴 Error on adding edges to non-existent vertices', () => {
        g.addVertex(zero);
        g.addVertex(one);
        expect(() => g.addDirectedEdge(two, three, '🦔')).toThrow(
            'NON-EXISTENT VERTEX SITUATION 😱'
        );
    });

    test('#getVertices() returns 🟢 collection of all vertices', () => {
        g.addVertex(zero);
        g.addVertex(one);
        g.addVertex(two);
        g.addVertex(twoToo);
        g.addVertex(three);
        expect(g.getVertices()).toEqual([0, 1, 2, 2, 3]);
    });

    test('#getVertices() returns 🟢 properly a graph with one vertex and an edge', () => {
        g.addVertex(zero);
        g.addDirectedEdge(zero, zero, `It's getting cyclic in here 🔄`);
        expect(g.getVertices(zero)).toEqual([0]);
    });

    test('#getVertices() throws 🔴 if graph is empty', () => {
        expect(() => g.getVertices()).toThrow('GRAPH IS EMPTY 😱');
    });

    test('#getUniqueVertices() returns 🟢 collection of unique vertices', () => {
        g.addVertex(zero);
        g.addVertex(one);
        g.addVertex(two);
        g.addVertex(twoToo);
        g.addVertex(three);
        g.addVertex(four);
        g.addVertex(fourToo);

        // two smart ways to convert a Set to an Array
        // spreading
        expect([...g.getUniqueVertices()]).toEqual([0, 1, 2, 3, 4]);
        // Array.from()
        expect(Array.from(g.getUniqueVertices())).toEqual([0, 1, 2, 3, 4]);
    });

    test('#getUniqueVertices() throws 🔴 if graph is empty', () => {
        expect(() => g.getUniqueVertices()).toThrow('GRAPH IS EMPTY 😱');
    });

    test('#getNeighbors() returns 🟢 the happy neighbors with weight', () => {
        g.addVertex(zero);
        g.addVertex(one);
        g.addVertex(two);
        g.addVertex(twoToo);
        g.addVertex(three);

        g.addDirectedEdge(zero, one);
        g.addDirectedEdge(zero, two);
        expect(g.getNeighbors(zero).length).toEqual(2);
        expect(g.getNeighbors(zero)[0].vertex.value).toEqual(1);
        expect(g.getNeighbors(zero)[0].weight).toEqual(null);
        expect(g.getNeighbors(zero)[1].vertex.value).toEqual(2);
        expect(g.getNeighbors(zero)[1].weight).toEqual(null);
    });

    test(`#getNeighbors() returns 🔴 null if there ain't none`, () => {
        g.addVertex(zero);
        g.addVertex(one);
        g.addVertex(two);
        g.addVertex(twoToo);
        g.addVertex(three);

        g.addDirectedEdge(zero, one);
        g.addDirectedEdge(zero, two);
        expect(g.getNeighbors(two)).toEqual(null);
    });

    test('#size() returns 🟢 the correct size of the respected establishment', () => {
        g.addVertex(zero);
        g.addVertex(one);
        g.addVertex(two);
        g.addVertex(twoToo);
        g.addVertex(three);

        expect(g.size()).toEqual(5);
    });

    test('#size() returns 🔴 a big fat zero if the graph is lonely', () => {
        expect(g.size()).toEqual(0);
    });

    test('#bfs() returns 🟢 collection of visited vertices (maintains order)', () => {
        g.addVertex(zero);
        g.addVertex(one);
        g.addVertex(two);
        g.addVertex(three);
        g.addVertex(four);
        g.addVertex(five);

        g.addDirectedEdge(zero, two);
        g.addDirectedEdge(two, three);
        g.addDirectedEdge(two, four);
        g.addDirectedEdge(three, five);
        g.addDirectedEdge(four, five);
        g.addDirectedEdge(one, three);

        expect(g.bfs(zero)).toEqual([
            { value: 2 },
            { value: 3 },
            { value: 4 },
            { value: 5 }
        ]);
        expect(g.bfs(zero)[0].value).toEqual(2);
    });
});

describe(':::: businessTrip ✈️ ::::', () => {
    const cities = ['Metroville', 'Pandora'];
    const cities2 = ['Arendelle', 'Monstropolis', 'Naboo'];
    const cities3 = ['Naboo', 'Pandora'];
    const cities4 = ['Narnia', 'Arendelle', 'Naboo'];
    let g;
    beforeEach(() => {
        g = new Graph();

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
    });

    it('returns 🟢 true with pricing', () => {
        expect(businessTrip(g, cities)).toEqual('true, $82');
        expect(businessTrip(g, cities2)).toEqual('true, $115');
    });

    it('returns 🔴 false with big lonely 0 dollar!!!!', () => {
        expect(businessTrip(g, cities3)).toEqual('false, $0');
        expect(businessTrip(g, cities4)).toEqual('false, $0');
    });
});

describe(':::: graphDFS ::::', () => {
    const a = 'a';
    const b = 'b';
    const c = 'c';
    const d = 'd';
    const e = 'e';
    const f = 'f';
    const h = 'h';
    const g = 'g';
    let myGraph;
    beforeEach(() => {
        myGraph = new Graph();

        myGraph.addVertex(a);
        myGraph.addVertex(b);
        myGraph.addVertex(c);
        myGraph.addVertex(d);
        myGraph.addVertex(e);
        myGraph.addVertex(f);
        myGraph.addVertex(h);
        myGraph.addVertex(g);

        myGraph.addDirectedEdge(a, b);
        myGraph.addDirectedEdge(a, d);

        myGraph.addDirectedEdge(b, c);
        myGraph.addDirectedEdge(b, d);
        myGraph.addDirectedEdge(b, a);

        myGraph.addDirectedEdge(c, g);
        myGraph.addDirectedEdge(c, b);

        myGraph.addDirectedEdge(g, c);

        myGraph.addDirectedEdge(d, a);
        myGraph.addDirectedEdge(d, b);
        myGraph.addDirectedEdge(d, e);
        myGraph.addDirectedEdge(d, h);
        myGraph.addDirectedEdge(d, f);

        myGraph.addDirectedEdge(e, d);

        myGraph.addDirectedEdge(h, f);
        myGraph.addDirectedEdge(h, d);

        myGraph.addDirectedEdge(f, d);
        myGraph.addDirectedEdge(f, h);
    });

    it('returns 🟢 correct order', () => {
        expect(myGraph.dfs(a)).toEqual(['a', 'b', 'c', 'g', 'd', 'e', 'h', 'f']);
    });
});