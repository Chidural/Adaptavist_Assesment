import * as fs from 'fs';

export function countWords(filePath: string): Map<string, number> {
    const content = fs.readFileSync(filePath, 'utf-8');
    const words = content.split(/\s+/);

    const wordCount = new Map<string, number>()

    words.forEach((word) => {
        const normalizedWord = word.toLowerCase();
        if (normalizedWord)
            wordCount.set(normalizedWord, (wordCount.get(normalizedWord) || 0) + 1);
    });
    // sorted by most frequent at the top
    return new Map(Array.from(wordCount.entries()).sort((a, b) => b[1] - a[1]));
}

export function printWordCount(wordCount: Map<string, number>): void {
    wordCount.forEach((count, word) => {
        console.log(`${word}: ${count}`);
    });
}