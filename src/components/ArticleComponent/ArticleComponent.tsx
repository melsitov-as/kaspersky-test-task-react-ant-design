import React from 'react';
import DOMPurify from 'dompurify';
import { IData_SnippetNews } from '../../interfaces/interfaces';

interface ArticleProps {
  data: IData_SnippetNews | null | undefined;
}

const tagWords = ['antivirus', 'kaspersky', 'new'];

const markTags = (text: string | null | undefined, words: string[]) => {
  if (!text) {
    return text;
  }

  let modifiedText = text;

  words.forEach((word) => {
    const regex = new RegExp(word, 'gi');
    const replacement = `<span style="background-color: #0074d3">${word}</span>`; // Пример стилизации

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
