'use strict';

const AnimalShelter = require('./animal-shelter');

const Animal1 = {
    type: 'cat',
    name: 'silly',
    age: 1
};

const Animal2 = {
    type: 'cat',
    name: 'pasta',
    age: 5
};

const Animal3 = {
    type: 'cat',
    name: 'dumb-dumb',
    age: 4
};

const Animal4 = {
    type: 'cat',
    name: 'lava',
    age: 2
};

const Animal5 = {
    type: 'dog',
    name: 'wolverine',
    age: 3
};

const Animal6 = {
    type: 'dog',
    name: 'escanor',
    age: 1
};

const Animal7 = {
    type: 'dog',
    name: 'estarossa',
    age: 2
};

const Animal8 = {
    type: 'panda',
    name: 'estarossa',
    age: 2
};

describe('AnimalShelter FIFO structure', () => {

    test('#constructor creates empty queues at instantiation', () => {
        const newQueue = new AnimalShelter();
        // console.log(q);
        expect(newQueue.dogShelter.front).toEqual(null);
        expect(newQueue.catShelter.front).toEqual(null);
    });

    test('#enqueue() without specifying animal type (or wrong animal type) raises exception', () => {
        const newQueue = new AnimalShelter();

        // enqueued animal type was 'panda'
        expect(() => newQueue.enqueue(Animal8)).toThrow('Animal type was not specified!');
    });

    test('#enqueue() adds cat type to its proper queue', () => {
        const newQueue = new AnimalShelter();
        newQueue.enqueue(Animal2);

        // enqueued animal was 'cat', dog queue should be empty
        expect(newQueue.dogShelter.front).toEqual(null);

        expect(newQueue.catShelter.front.value.type).toEqual('cat');
        expect(newQueue.catShelter.front.value.name).toEqual('pasta');
    });

    test('#enqueue() adds dog type to its proper queue', () => {
        const newQueue = new AnimalShelter();
        newQueue.enqueue(Animal5);

        // enqueued animal was 'dog', cat queue should be empty
        expect(newQueue.catShelter.front).toEqual(null);

        expect(newQueue.dogShelter.front.value.type).toEqual('dog');
        expect(newQueue.dogShelter.front.value.name).toEqual('wolverine');
    });

    test('#enqueue() adds multiple dog and cat types to their proper queue', () => {
        const newQueue = new AnimalShelter();

        // cats
        newQueue.enqueue(Animal1);
        newQueue.enqueue(Animal2);
        newQueue.enqueue(Animal3);
        newQueue.enqueue(Animal4);

        // dogs
        newQueue.enqueue(Animal5);
        newQueue.enqueue(Animal6);
        newQueue.enqueue(Animal7);

        
        expect(newQueue.catShelter.front.value.type).toEqual('cat');
        expect(newQueue.catShelter.front.value.name).toEqual('silly');

        expect(newQueue.catShelter.front.next.value.type).toEqual('cat');
        expect(newQueue.catShelter.front.next.value.name).toEqual('pasta');

        expect(newQueue.catShelter.front.next.next.value.type).toEqual('cat');
        expect(newQueue.catShelter.front.next.next.value.name).toEqual('dumb-dumb');

        // front of cat queue is correct after multiple enqueues
        expect(newQueue.dogShelter.front.value.type).toEqual('dog');
        expect(newQueue.dogShelter.front.value.name).toEqual('wolverine');

        expect(newQueue.dogShelter.front.next.value.type).toEqual('dog');
        expect(newQueue.dogShelter.front.next.value.name).toEqual('escanor');

        expect(newQueue.dogShelter.front.next.next.value.type).toEqual('dog');
        expect(newQueue.dogShelter.front.next.next.value.name).toEqual('estarossa');
    });

    test('#dequeue() works properly with pref parameter', () => {
        const newQueue = new AnimalShelter();

        // cats
        newQueue.enqueue(Animal1);
        newQueue.enqueue(Animal2);
        newQueue.enqueue(Animal3);
        newQueue.enqueue(Animal4);

        // dogs
        newQueue.enqueue(Animal5);
        newQueue.enqueue(Animal6);
        newQueue.enqueue(Animal7);

        // dequeue('cat') should remove and return the front node of cat queue
        const dequeuedCat = newQueue.dequeue('cat');
        expect(dequeuedCat.value.type).toEqual('cat');
        expect(dequeuedCat.value.name).toEqual('silly');
        // front should be updated to the next node
        expect(newQueue.catShelter.front.value.name).toEqual('pasta');

        // dequeue('dog') should remove and return the front node of dog queue
        const dequeuedDog = newQueue.dequeue('dog');
        expect(dequeuedDog.value.type).toEqual('dog');
        expect(dequeuedDog.value.name).toEqual('wolverine');
        // front should be updated to the next node
        expect(newQueue.dogShelter.front.value.name).toEqual('escanor');
    });

    test('---STRETCH--- #dequeue() returns longest waiting animal if pref is undefined', () => {
        const newQueue = new AnimalShelter();

        // cats
        newQueue.enqueue(Animal1);
        newQueue.enqueue(Animal2);
        newQueue.enqueue(Animal3);
        newQueue.enqueue(Animal4);

        // dogs
        newQueue.enqueue(Animal5);
        newQueue.enqueue(Animal6);
        newQueue.enqueue(Animal7);

        // dequeue() should remove and return the front node of cat queue
        // because lengths of cat queue > dog queue
        const dequeued = newQueue.dequeue('');
        expect(dequeued.value.type).toEqual('cat');
        expect(dequeued.value.name).toEqual('silly');
        // front should be updated to the next node
        expect(newQueue.catShelter.front.value.name).toEqual('pasta');

        // dequeue() now will return an array of two nodes from both queues
        // because length of cat queue === dog queue
        const dequeued2 = newQueue.dequeue('');
        expect(dequeued2[0].value.type).toEqual('dog');
        expect(dequeued2[0].value.name).toEqual('wolverine');
        expect(dequeued2[1].value.type).toEqual('cat');
        expect(dequeued2[1].value.name).toEqual('pasta');
    });
});
