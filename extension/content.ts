import {ContentResponse} from './types';

function countHeadings(): number {
  return document.querySelectorAll('h1,h2,h3,h4,h5,h6').length
}

function countParagraphs(): number {
  return document.querySelectorAll('p').length;
}

function countOtherBlocks(): number {
  return document.querySelectorAll('div, main, article, section, header, footer, aside').length;
}

/**
 * Time to read is based on an average reading speed, which is typically between 200 and 300 words per minute.
 * @param wordCount number of words
 */
function timeToRead(wordCount: number) {
  const avgReadingSpeed = 200; // words per minute
  const timeToRead = Math.ceil(wordCount / avgReadingSpeed);
  return `${timeToRead} min read`;
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    const clonedDoc: HTMLElement = document.body.cloneNode(true) as HTMLBodyElement;
    // remove all script elements from the cloned document, so we can extract visible text.
    const nonBlockElements = clonedDoc.querySelectorAll('script,style');
    if (nonBlockElements) {
      for (const el of nonBlockElements) {
        el.remove();
      }
    }
    const visibleText: string = clonedDoc?.textContent ?? '';
    const paragraphs = countParagraphs();
    const headings = countHeadings();
    const blocks = paragraphs + headings + countOtherBlocks();
    // Percent of visible text on a webpage to the amount of HTML code needed to display it.
    const textToHtml = Number((visibleText.length / document.body.innerHTML.length)*100).toFixed(2)
    const words = visibleText.split(" ");

    sendResponse({
      visibleText,
      headings,
      blocks,
      paragraphs,
      words: words.length,
      timeToRead: timeToRead(words.length),
      textToHtml: `${textToHtml}%`
    } as unknown as ContentResponse)
  }
);
