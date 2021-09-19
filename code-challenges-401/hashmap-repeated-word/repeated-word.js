function repeatedWord(str) {
    const regex = /^(,|\.)/g;
    let repeated = {};
    let words = str.split(" ");
    console.log(words);
    for (let i = 0; i < words.length; i++) {
        if (regex.test(words[i])) {
            // console.log(words[i])
            words.splice(i, 1);
        }
    }

    let firstRepeated;
    for (let i = 0; i < words.length; i++) {
        if (repeated[words[i]]) {
            firstRepeated = words[i];
            break;
        } else {
            repeated[words[i].toLowerCase()] = true;
        }
    }
    return firstRepeated;
}

let strv = "Once upon a time, there was a brave princess who..."
console.log(repeatedWord(strv))
// module.exports = repeatedWord;
