'use strict';

const Queue = require('./stacks-and-queues').Queue;

class AnimalShelter {

    constructor() {
        this.dogShelter = new Queue();
        this.catShelter = new Queue();
    }

    enqueue(animal) {

        if (!animal.type || (animal.type !== 'dog' && animal.type !== 'cat')) throw new Error('Animal type was not specified!');

        if (animal.type === 'dog') {
            this.dogShelter.enqueue(animal);
        }

        if (animal.type === 'cat') {
            this.catShelter.enqueue(animal);
        }
    }

    dequeue(pref) {

        if (pref === 'dog') {
            return this.dogShelter.dequeue();
        }

        if (pref === 'cat') {
            return this.catShelter.dequeue();
        }

        //// stretch goal: if pref === undefined, return whichever
        //// animal has been waiting in the shelter the longest
        if (this.catShelter.size < this.dogShelter.size) {
            return this.dogShelter.dequeue();
        }

        if (this.catShelter.size > this.dogShelter.size) {
            return this.catShelter.dequeue();
        }

        if (this.catShelter.size === this.dogShelter.size) {
            return [this.dogShelter.dequeue(), this.catShelter.dequeue()];
        }
    }
}

module.exports = AnimalShelter;
