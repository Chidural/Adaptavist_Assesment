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
        wordCount.set(normalizedWord, (wordCount.get(normalizedWord) || 0) + 1);
    });
    return wordCount;
}
exports.countWords = countWords;
function printWordCount(wordCount) {
    var sortedWordCount = new Map(Array.from(wordCount.entries()).sort(function (a, b) { return b[1] - a[1]; }));
    sortedWordCount.forEach(function (count, word) {
        console.log("".concat(word, ": ").concat(count));
    });
}
exports.printWordCount = printWordCount;
if (process.argv.length !== 3) {
    console.error('Usage: node wordCount.js <file-path>');
    throw new Error('Invalid command line arguments');
}
var filePath = process.argv[2];
var wordCountResult = countWords(filePath);
printWordCount(wordCountResult);
