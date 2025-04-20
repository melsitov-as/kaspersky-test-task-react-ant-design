import React from 'react';
import DOMPurify from 'dompurify';
import { ArticleProps } from '../../interfaces/interfaces';
import { tagWords } from '../../utils/const';

const markTags = (text: string | null | undefined, words: string[]) => {
  if (!text) {
    return text;
  }

  let modifiedText = text;

  words.forEach((word) => {
    const regex = new RegExp(word, 'gi');

    modifiedText = modifiedText.replace(regex, (match) => {
      return `<span style="background-color: #0074d3">${match}</span>`;
    });
  });

  return modifiedText;
};

const ArticleComponent: React.FC<ArticleProps> = ({ data }) => {
  const highlightedText: string | null | undefined = markTags(
    data?.AB,
    tagWords
  );
  const sanitizedHTML: string = highlightedText
    ? DOMPurify.sanitize(highlightedText)
    : '';
  return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
};

export default ArticleComponent;
