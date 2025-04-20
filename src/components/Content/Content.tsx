import React, { useState } from 'react';
import { Typography, Button, Flex, Tag } from 'antd';
import { CaretDownFilled } from '@ant-design/icons';

import * as styles from './styles';
import ArticleComponent from '../ArticleComponent/ArticleComponent';
import { tagWords } from '../../utils/const';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const { Paragraph, Text, Link } = Typography;

const countTags = (
  text: string | null | undefined,
  words: string[]
): { tag: string; count: number }[] => {
  if (!text) {
    return [];
  }

  const tagCounts: { [key: string]: number } = {};

  words.forEach((word) => {
    const regex = new RegExp(word, 'gi');
    let match;
    while ((match = regex.exec(text)) !== null) {
      const matchedWord = match[0];
      tagCounts[matchedWord] = (tagCounts[matchedWord] || 0) + 1;
    }
  });

  const keyWord = 'key word';
  for (let i = 0; i < 9; i++) {
    tagCounts[keyWord + '-' + (i + 1)] = 1; // Или другое желаемое количество
  }

  return Object.entries(tagCounts).map(([tag, count]) => ({ tag, count }));
};

const Content: React.FC = () => {
  const data = useSelector((state: RootState) => state.data.data);
  const [isShowMoreTextOpened, setShowMoreTextOpened] = useState(false);
  const [isShowMoreTagsOpened, setShowMoreTagsOpened] = useState(false);

  const handleShowMoreTextOpened = () =>
    setShowMoreTextOpened(!isShowMoreTextOpened);
  const handleShowMoreTagsOpened = () =>
    setShowMoreTagsOpened(!isShowMoreTagsOpened);

  const countedTags = countTags(data?.AB, tagWords);

  return (
    <div className='content-container' style={styles.containerStyle}>
      <Paragraph
        style={{
          ...styles.textStyle,
          ...styles.tAlignLeft,
          ...styles.margBottom02,
        }}
        ellipsis={
          isShowMoreTextOpened
            ? false
            : {
                rows: 3,
                onExpand: handleShowMoreTextOpened, // Функция, вызываемая при раскрытии
              }
        }
      >
        <ArticleComponent />
      </Paragraph>

      <Button
        type='text'
        style={{
          display: 'flex',
          width: '140px',
          padding: 0,
          ...styles.margB25,
        }}
        onClick={handleShowMoreTextOpened}
      >
        <Text
          style={{
            ...styles.textStyle,
            ...styles.colorBlue,
            marginRight: 'auto',
          }}
        >
          {!isShowMoreTextOpened ? 'Show more' : 'Hide text'}
        </Text>
        <CaretDownFilled
          style={{
            ...styles.colorBlue,
            fontSize: '18px',
            transform: isShowMoreTextOpened ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </Button>

      <Flex gap={'small'} wrap={'wrap'} style={styles.margB18}>
        {(!isShowMoreTagsOpened ? countedTags.slice(0, 6) : countedTags).map(
          (tag) => (
            <Tag
              style={{
                ...styles.tagStyle,
                ...styles.margL12,
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}
              key={nanoid()}
            >
              <span
                style={{
                  ...styles.textTagStyle,
                  ...styles.margL7,
                  display: 'inline-block',
                }}
                className='tag-title'
              >
                {tag.tag}
              </span>
              <span
                style={{
                  ...styles.textTagStyle,
                  ...styles.margL7,
                  display: 'inline-block',
                }}
                className='tag-count'
              >
                {tag.count}
              </span>
            </Tag>
          )
        )}

        <Button
          type='text'
          style={{
            display: 'flex',
            width: '140px',
            padding: 0,
            ...styles.margB25,
            ...styles.margL12,
          }}
          onClick={handleShowMoreTagsOpened}
        >
          <Text style={{ ...styles.textStyleSmall, ...styles.colorBlue }}>
            {!isShowMoreTagsOpened ? 'Show more +9' : 'Hide tags -9'}
          </Text>
          <CaretDownFilled
            style={{
              ...styles.colorBlue,
              fontSize: '18px',
              transform: isShowMoreTagsOpened
                ? 'rotate(180deg)'
                : 'rotate(0deg)',
            }}
          />
        </Button>
      </Flex>

      <Link href='#' style={styles.contentLinkStyle}>
        Original Source
      </Link>
    </div>
  );
};

export default Content;
