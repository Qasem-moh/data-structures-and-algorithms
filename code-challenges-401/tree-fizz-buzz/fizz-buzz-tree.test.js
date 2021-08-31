'use strict';

const { K_aryNode, K_aryTree } = require('./tree-fizz-buzz');

describe(':::: K_aryTree ::::', () => {

    let tree;

    beforeAll(() => {

        /* Tree Example
                            (50)
                       /   |  \     \
                     /    |    \      \
                 (30)   (70)  (-10)     (33)
                /   \          |      /  |  \
             (12)   (21)     (55)   (7)(63) (100)
            /   \                            |
          (-22) (111)                       (43)
        */

        // breadth-first [50,   30,        70,      -10,    33,     12,     21,     55,     7,   63,     100,    -22,   111,    43]
        // fizzBuzzed ['Buzz', 'FizzBuzz', 'Buzz', 'Buzz', 'Fizz', 'Fizz', 'Fizz', 'Buzz', '7', 'Fizz', 'Buzz', '-22', 'Fizz', '43']

        tree = new K_aryTree(50);

        const levelOne1 = new K_aryNode(30);
        const levelOne2 = new K_aryNode(70);
        const levelOne3 = new K_aryNode(-10);
        const levelOne4 = new K_aryNode(33);

        const levelTwo1 = new K_aryNode(12);
        const levelTwo2 = new K_aryNode(21);
        const levelTwo3 = new K_aryNode(55);
        const levelTwo4 = new K_aryNode(7);
        const levelTwo5 = new K_aryNode(63);
        const levelTwo6 = new K_aryNode(100);

        const levelThree1 = new K_aryNode(-22);
        const levelThree2 = new K_aryNode(111);
        const levelThree3 = new K_aryNode(43);

        // root's children
        tree.root.children[0] = levelOne1;
        tree.root.children[1] = levelOne2;
        tree.root.children[2] = levelOne3;
        tree.root.children[3] = levelOne4;

        // levelOne's children
        levelOne1.children[0] = levelTwo1;
        levelOne1.children[1] = levelTwo2;
        //
        levelOne3.children[0] = levelTwo3;
        //
        levelOne4.children[0] = levelTwo4;
        levelOne4.children[1] = levelTwo5;
        levelOne4.children[2] = levelTwo6;

        // levelTwo's children
        levelTwo1.children[0] = levelThree1;
        levelTwo1.children[1] = levelThree2;
        //
        levelTwo6.children[0] = levelThree3;

    });

    it('#fizzBuzzTree() ---> returns new fizzBuzzed tree', () => {
        const fizzBuzzedTree = tree.fizzBuzzTree();

        // original tree is not mutated
        expect(tree.bfs()).toEqual([50, 30, 70, -10, 33, 12, 21, 55, 7, 63, 100, -22, 111, 43]);

        // new tree has access to the class methods
        expect(fizzBuzzedTree.bfs()).toEqual(['Buzz', 'FizzBuzz', 'Buzz', 'Buzz', 'Fizz', 'Fizz', 'Fizz', 'Buzz', '7', 'Fizz', 'Buzz', '-22', 'Fizz', '43']);
    });
});
