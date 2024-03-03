import * as mockFs from 'mock-fs';
import { countWords, printWordCount } from "./helper";


import { run } from "./wordCount";

describe('run function', () => {

    beforeEach(() => {
        mockFs({
            './sample.txt': 'This is a sample text.',
        });
    });

    afterEach(() => {
        mockFs.restore();
    });

    it('should call countWords with the correct file path', () => {
        run();
        expect(countWords).toHaveBeenCalledWith('./sample.txt');
    });

    it('should call printWordCount with the result of countWords', () => {
        run();
        expect(printWordCount).toHaveBeenCalledWith(new Map([['this', 1], ['is', 1], ['a', 1], ['sample', 1], ['text', 1]]));
    });

    it('should console an error for invalid command line arguments', () => {
        process.argv = ['node', 'wordCount.js'];
        run();
        expect(console.error).toHaveBeenCalledTimes(2);
        expect(console.error).toHaveBeenNthCalledWith(1, 'Invalid command line arguments');
        expect(console.error).toHaveBeenNthCalledWith(2, 'Usage: node wordCount.js <file-path>');
        expect(countWords).not.toHaveBeenCalled();
        expect(printWordCount).not.toHaveBeenCalled();
    });
});
