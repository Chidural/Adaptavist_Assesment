"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var helper_1 = require("./helper");
var run = function () {
    if (process.argv.length < 3) {
        console.error('Invalid command line arguments');
        console.error('Usage: node wordCount.js <file-path>');
        return;
    }
    var filePath = process.argv[2];
    var wordCountResult = (0, helper_1.countWords)(filePath);
    (0, helper_1.printWordCount)(wordCountResult);
};
exports.run = run;
(0, exports.run)();
