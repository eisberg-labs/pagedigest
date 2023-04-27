export enum Command {
  GET_CONTENT,
}

export interface ContentResponse {
  visibleText: string;
  headings: number;
  blocks: number;
  paragraphs: number;
  textToHtml: string;
  words: number;
  timeToRead: string;
}
