"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printWordCount = exports.countWords = void 0;
var fs = require("fs");
function countWords(filePath) {
    var content = fs.readFileSync(filePath, 'utf-8');
    var words = content.split(/\s+/);
    var wordCount = new Map();
    words.forEach(function (word) {
        var normalizedWord = word.toLowerCase();
        if (normalizedWord)
            wordCount.set(normalizedWord, (wordCount.get(normalizedWord) || 0) + 1);
    });
    // sorted by most frequent at the top
    return new Map(Array.from(wordCount.entries()).sort(function (a, b) { return b[1] - a[1]; }));
}
exports.countWords = countWords;
function printWordCount(wordCount) {
    wordCount.forEach(function (count, word) {
        console.log("".concat(word, ": ").concat(count));
    });
}
exports.printWordCount = printWordCount;
