
import * as fs from 'fs';

export function countWords(filePath: string): Map<string, number> {
  const content = fs.readFileSync(filePath, 'utf-8');
  const words = content.split(/\s+/);
  
  const wordCount = new Map<string, number>()
  
  words.forEach((word) => {
    const normalizedWord = word.toLowerCase();
    wordCount.set(normalizedWord, (wordCount.get(normalizedWord) || 0) + 1);
  });

  return wordCount;
}

export function printWordCount(wordCount: Map<string, number>): void {
  const sortedWordCount = new Map(Array.from(wordCount.entries()).sort((a, b) => b[1] - a[1]));

  sortedWordCount.forEach((count, word) => {
    console.log(`${word}: ${count}`);
  });
}

if (process.argv.length !== 3) {
  console.error('Usage: node wordCount.js <file-path>');
  throw new Error('Invalid command line arguments');
}

const filePath = process.argv[2];
const wordCountResult = countWords(filePath);
printWordCount(wordCountResult);
