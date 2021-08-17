'use strict';


const zipPage = require('./linkdlist-zip');
const LinkedList = zipPage.linkedList;
const zipLl = zipPage.zipLists;



describe('Testing Zip-list function ', () => {
    it('two linked list in the same length', () => {
        let lL1 = new LinkedList();
        let lL2 = new LinkedList();
        lL1.append(1);
        lL1.append(3);
        lL1.append(5);
        lL1.append(7);

        lL2.append(2);
        lL2.append(4);
        lL2.append(6);
        lL2.append(8);
        expect(zipLl(lL1, lL2).toString()).toEqual(`{${1}}-->{${2}}-->{${3}}-->{${4}}-->{${5}}-->{${6}}-->{${7}}-->{${8}}-->{null}`);

    });
    it('one of LL length greater then other by one', () => {
        let lL1 = new LinkedList();
        let lL2 = new LinkedList();
        lL1.append(1);
        lL1.append(3);
        lL1.append(5);

        lL2.append(2);
        lL2.append(4);
        lL2.append(6);
        lL2.append(8);

        expect(zipLl(lL1, lL2).toString()).toEqual(`{${1}}-->{${2}}-->{${3}}-->{${4}}-->{${5}}-->{${6}}-->{${8}}-->{null}`);
        lL1 = new LinkedList();
        lL2 = new LinkedList();
        lL1.append(1);
        lL1.append(3);
        lL1.append(5);
        lL1.append(7);

        lL2.append(2);
        lL2.append(4);
        lL2.append(6);
        expect(zipLl(lL1, lL2).toString()).toEqual(`{${1}}-->{${2}}-->{${3}}-->{${4}}-->{${5}}-->{${6}}-->{${7}}-->{null}`);

    });
    it('one of LL length greater then other greater then one', () => {
        let lL1 = new LinkedList();
        let lL2 = new LinkedList();
        lL1.append(1);
        lL1.append(3);


        lL2.append(2);
        lL2.append(4);
        lL2.append(6);
        lL2.append(8);
        expect(zipLl(lL1, lL2).toString()).toEqual(`{${1}}-->{${2}}-->{${3}}-->{${4}}-->{${6}}-->{${8}}-->{null}`);

    });
    it('one of LL length zero', () => {
        let lL1 = new LinkedList();
        let lL2 = new LinkedList();
        lL2.append(2);
        lL2.append(4);
        lL2.append(6);
        lL2.append(8);
        expect(zipLl(lL1, lL2).toString()).toEqual(`{${2}}-->{${4}}-->{${6}}-->{${8}}-->{null}`);

    });
});
