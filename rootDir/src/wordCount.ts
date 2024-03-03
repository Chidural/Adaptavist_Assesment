import { countWords, printWordCount } from "./helper";

export const run = () => {
  if (process.argv.length < 3) {
    console.error('Invalid command line arguments');
    console.error('Usage: node wordCount.js <file-path>');
    return
  }

  const filePath = process.argv[2];
  const wordCountResult = countWords(filePath);
  printWordCount(wordCountResult);
}

run();