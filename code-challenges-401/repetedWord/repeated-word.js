"use strict";

function repeatedWord(parag) {
    const words = parag.split(/[\s,]+/);

    let array = [];

    for (let word = 0; word < words.length; word++) {
        let doLowerWord = words[word].toLowerCase();
        const isinclud = array.includes(doLowerWord);

        if (isinclud) return doLowerWord;
        array.push(doLowerWord);
    }
    return "no duplicate words!";
}

module.exports = repeatedWord;