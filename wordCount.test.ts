import { countWords, printWordCount } from './rootDir/src/wordCount';

describe('Word Count Tests', () => {
  test('should count words and print in descending order', () => {
    // ... (unchanged from previous test case)
  });

  test('should throw an error for invalid command line arguments', () => {
    // Mock process.argv to simulate invalid command line arguments
    const originalProcessArgv = process.argv;
    process.argv = ['node', 'wordCount.js'];

    // Expect an error to be thrown with the specified message
    expect(() => {
      countWords('sample.txt');
    }).toThrowError('Invalid command line arguments');

    // Restore process.argv to its original value
    process.argv = originalProcessArgv;
  });

  test('should throw an error with the correct message for invalid command line arguments', () => {
    // Mock process.argv to simulate invalid command line arguments
    const originalProcessArgv = process.argv;
    process.argv = ['node', 'wordCount.js'];

    // Expect an error to be thrown with the exact specified message
    expect(() => {
      countWords('sample.txt');
    }).toThrowError(/^Invalid command line arguments$/);

    // Restore process.argv to its original value
    process.argv = originalProcessArgv;
  });
});
