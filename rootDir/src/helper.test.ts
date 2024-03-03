import * as fs from 'fs';
import { countWords, printWordCount } from './helper';

jest.mock('fs')

const sampleText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Non sodales neque
sodales ut. Gravida arcu ac tortor dignissim convallis aenean et tortor.
Ultricies mi eget mauris pharetra et ultrices neque. Vel eros donec ac odio
tempor orci.
Tellus in metus vulputate eu scelerisque felis. Volutpat diam ut venenatis
tellus in metus vulputate eu. Tempor id eu nisl nunc mi ipsum faucibus
vitae. Sit amet luctus venenatis lectus magna fringilla urna. Habitant
morbi tristique senectus et netus. Eget felis eget nunc lobortis. Neque
vitae tempus quam pellentesque nec.
`
const result = {
  'et': 4,
  'tempor': 3,
  'eget': 3,
  'ipsum': 2,
  'sit': 2,
  'ut': 2,
  'magna': 2,
  'sodales': 2,
  'neque': 2,
  'ac': 2,
  'mi': 2,
  'tellus': 2,
  'in': 2,
  'metus': 2,
  'vulputate': 2,
  'eu': 2,
  'venenatis': 2,
  'nunc': 2,
  'lorem': 1,
  'dolor': 1,
  'amet,': 1,
  'consectetur': 1,
  'adipiscing': 1,
  'elit,': 1,
  'sed': 1,
  'do': 1,
  'eiusmod': 1,
  'incididunt': 1,
  'labore': 1,
  'dolore': 1,
  'aliqua.': 1,
  'non': 1,
  'ut.': 1,
  'gravida': 1,
  'arcu': 1,
  'tortor': 1,
  'dignissim': 1,
  'convallis': 1,
  'aenean': 1,
  'tortor.': 1,
  'ultricies': 1,
  'mauris': 1,
  'pharetra': 1,
  'ultrices': 1,
  'neque.': 1,
  'vel': 1,
  'eros': 1,
  'donec': 1,
  'odio': 1,
  'orci.': 1,
  'scelerisque': 1,
  'felis.': 1,
  'volutpat': 1,
  'diam': 1,
  'eu.': 1,
  'id': 1,
  'nisl': 1,
  'faucibus': 1,
  'vitae.': 1,
  'amet': 1,
  'luctus': 1,
  'lectus': 1,
  'fringilla': 1,
  'urna.': 1,
  'habitant': 1,
  'morbi': 1,
  'tristique': 1,
  'senectus': 1,
  'netus.': 1,
  'felis': 1,
  'lobortis.': 1,
  'vitae': 1,
  'tempus': 1,
  'quam': 1,
  'pellentesque': 1,
  'nec.': 1
}


const mockResult = () => {
  const expectedResult = new Map()

  for (const [key, value] of Object.entries(result)) {
    expectedResult.set(key, value)
  }
  return expectedResult
}

const logSpy = jest.fn()

describe('Word Count', () => {

  beforeEach(() => {
    jest.spyOn(fs, 'readFileSync').mockReturnValue(sampleText);
    jest.spyOn(console, 'log').mockImplementation(logSpy);
  });

  afterEach(() => jest.clearAllMocks())

  it('count the occurrences of each word in the file', () => {
    // arrange
    const result = mockResult()
    // act
    const wordCount = countWords(sampleText);
    // assert
    expect(wordCount).toEqual(result)
  })

  it('print the word count', () => {
    // arrange
    const wordCount = countWords(sampleText);

    // act
    printWordCount(wordCount);

    // assert
    expect(logSpy).toHaveBeenCalledTimes(wordCount.size);
    Object.entries(wordCount).forEach(([word, count], index) => {
      expect(logSpy).toHaveBeenNthCalledWith(index + 1, `${word}: ${count}`);
    })
  })

});
