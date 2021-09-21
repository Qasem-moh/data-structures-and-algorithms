'use strict';

function leftJoin(hashTable1, hashTable2) {
    const leftJoinObj = {};

    hashTable1.table.forEach(bucket => {
        if (bucket) {
            // console.log(bucket.root.value);
            let key = Object.keys(bucket.root.value)[0];
            leftJoinObj[key] = [bucket.root.value[key]];

        }
    });

    hashTable2.table.forEach(bucket => {
        if (bucket) {
            let key = Object.keys(bucket.root.value)[0];
            if (leftJoinObj[key]) {
                leftJoinObj[key].push(bucket.root.value[key]);
            }
        }
    });

    return leftJoinObj;
}

module.exports = {
    leftJoin
};