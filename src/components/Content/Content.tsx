import React, { useEffect, useState } from 'react';
import { Typography, Button, Flex, Tag } from 'antd';
import { BgColorsOutlined, CaretDownFilled } from '@ant-design/icons';

import * as styles from './styles';
import { IData_SnippetNews } from '../../interfaces/interfaces';
import ArticleComponent from '../ArticleComponent/ArticleComponent';

interface HeaderProps {
  data: IData_SnippetNews | null | undefined;
}

const { Paragraph, Text, Link } = Typography;

const userIcon = [
  <svg
    width='24px'
    height='24px'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z'
      fill='rgba(255, 255, 255, 0.7)'
    />
    <path
      d='M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z'
      fill='rgba(255, 255, 255, 0.7)'
    />
  </svg>,
];

const innovationIcon = [
  <svg
    fill='rgba(255, 255, 255, 0.7)'
    width='24px'
    height='24px'
    viewBox='0 0 64 64'
    style={{
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinejoin: 'round',
      strokeMiterlimit: '2',
    }}
  >
    <g id='ICON'>
      <path d='M10,39l0,19c0,1.657 1.343,3 3,3c4.69,-0 16,-0 16,-0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1c0,-0 -11.31,-0 -16,0c-0.552,0 -1,-0.448 -1,-1c0,-0 0,-19 0,-19c0,-0.552 -0.448,-1 -1,-1c-0.552,-0 -1,0.448 -1,1Zm23,22l18,-0c0.796,0 1.559,-0.316 2.121,-0.879c0.563,-0.562 0.879,-1.325 0.879,-2.121l-0,-17c0,-0.552 -0.448,-1 -1,-1c-0.552,-0 -1,0.448 -1,1l0,17c-0,0.265 -0.105,0.52 -0.293,0.707c-0.187,0.188 -0.442,0.293 -0.707,0.293l-18,-0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Zm-4,-3l6.5,0c0.552,-0 1,-0.448 1,-1c-0,-0.552 -0.448,-1 -1,-1l-6.5,0c-0.552,-0 -1,0.448 -1,1c-0,0.552 0.448,1 1,1Zm-1.5,-3l9.5,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-9.5,0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Zm-1.603,-3.284c0.187,0.182 0.437,0.284 0.698,0.284l10.81,0c0.261,0 0.511,-0.102 0.698,-0.284c3.344,-3.257 6.897,-8.272 6.897,-14.756c0,-7.152 -5.824,-12.96 -13,-12.96c-7.176,0 -13,5.808 -13,12.96c-0,6.484 3.553,11.499 6.897,14.756Zm9.103,-1.716c1.173,-0 1.995,-0 1.995,-0c2.941,-2.949 6.005,-7.36 6.005,-13.04c0,-6.05 -4.93,-10.96 -11,-10.96c-6.07,0 -11,4.91 -11,10.96c-0,5.68 3.064,10.091 6.005,13.04l0,0l1.995,-0l0,-10l-2,0c-2.208,0 -4,-1.792 -4,-4c0,-2.208 1.792,-4 4,-4c2.208,0 4,1.792 4,4l0,2l2,0l0,-2c0,-2.208 1.792,-4 4,-4c2.208,0 4,1.792 4,4c0,2.208 -1.792,4 -4,4l-2,0l0,10Zm-4,-10l0,10l2,-0l0,-10l-2,0Zm4,-2l2,0c1.104,0 2,-0.896 2,-2c0,-1.104 -0.896,-2 -2,-2c-1.104,0 -2,0.896 -2,2l0,2Zm-6,0l0,-2c0,-1.104 -0.896,-2 -2,-2c-1.104,0 -2,0.896 -2,2c0,1.104 0.896,2 2,2l2,0Zm-19,-28l0,25c0,0.552 0.448,1 1,1c0.552,-0 1,-0.448 1,-1l0,-19.781c0.017,0.017 0.033,0.034 0.05,0.051c1.313,1.313 3.093,2.05 4.95,2.05c4.893,0 11,0 11,0c0.552,-0 1,-0.448 1,-1c-0,-0.552 -0.448,-1 -1,-1c-0,0 -6.107,0 -11,0c-1.326,0 -2.598,-0.527 -3.536,-1.464c-0.937,-0.938 -1.464,-2.21 -1.464,-3.536c0,-0.107 0,-0.213 0,-0.32c-0,-1.326 0.527,-2.598 1.464,-3.536c0.938,-0.937 2.21,-1.464 3.536,-1.464c0,0 30.954,0 30.954,0l-0,4.16l-30.954,0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1l30.954,0l-0,4.16l-9.381,0l-0.002,0l-6.571,0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1l19,0c0.552,-0 1,0.448 1,1c-0,0 -0,18.18 -0,18.18c0,0.552 0.448,1 1,1c0.552,-0 1,-0.448 1,-1l-0,-18.18c-0,-1.657 -1.343,-3 -3,-3l-1.046,0l-0,-11.32c-0,-0.552 -0.448,-1 -1,-1l-31.954,0c-1.857,-0 -3.637,0.737 -4.95,2.05c-1.313,1.313 -2.05,3.093 -2.05,4.95Zm16.491,13.208l-1,-1.732c-0.276,-0.478 -0.888,-0.642 -1.366,-0.366c-0.478,0.276 -0.642,0.888 -0.366,1.366l1,1.732c0.276,0.478 0.888,0.642 1.366,0.366c0.478,-0.276 0.642,-0.888 0.366,-1.366Zm12.75,1l1,-1.732c0.276,-0.478 0.112,-1.09 -0.366,-1.366c-0.478,-0.276 -1.09,-0.112 -1.366,0.366l-1,1.732c-0.276,0.478 -0.112,1.09 0.366,1.366c0.478,0.276 1.09,0.112 1.366,-0.366Zm-6.241,-2.208l0,-2c0,-0.552 -0.448,-1 -1,-1c-0.552,-0 -1,0.448 -1,1l0,2c0,0.552 0.448,1 1,1c0.552,-0 1,-0.448 1,-1Z' />
    </g>
  </svg>,
];

const cubeIcon = [
  <svg
    width='24px'
    height='24px'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M4 7.5L11.6078 3.22062C11.7509 3.14014 11.8224 3.09991 11.8982 3.08414C11.9654 3.07019 12.0346 3.07019 12.1018 3.08414C12.1776 3.09991 12.2491 3.14014 12.3922 3.22062L20 7.5M4 7.5V16.0321C4 16.2025 4 16.2876 4.02499 16.3637C4.04711 16.431 4.08326 16.4928 4.13106 16.545C4.1851 16.6041 4.25933 16.6459 4.40779 16.7294L12 21M4 7.5L12 11.5M12 21L19.5922 16.7294C19.7407 16.6459 19.8149 16.6041 19.8689 16.545C19.9167 16.4928 19.9529 16.431 19.975 16.3637C20 16.2876 20 16.2025 20 16.0321V7.5M12 21V11.5M20 7.5L12 11.5'
      stroke='rgba(255, 255, 255, 0.7)'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>,
];

// const tags = [
//   { icon: userIcon, title: 'AutoPilot5000', count: 5 },
//   { icon: innovationIcon, title: 'InnovTech', count: 5 },
//   { icon: cubeIcon, title: 'autonomous driving', count: 5 },
//   { icon: '', title: 'key word', count: 1 },
//   { icon: '', title: 'key word', count: 1 },
//   { icon: '', title: 'key word', count: 1 },
//   { icon: '', title: 'key word', count: 1 },
//   { icon: '', title: 'key word', count: 1 },
//   { icon: '', title: 'key word', count: 1 },
//   { icon: '', title: 'key word', count: 1 },
//   { icon: '', title: 'key word', count: 1 },
//   { icon: '', title: 'key word', count: 1 },
//   { icon: '', title: 'key word', count: 1 },
//   { icon: '', title: 'key word', count: 1 },
//   { icon: '', title: 'key word', count: 1 },
// ];

const tagWords = ['antivirus', 'kaspersky', 'new'];

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

const Content: React.FC<HeaderProps> = ({ data }) => {
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
                rows: 3, // Усечение до двух строк
                onExpand: handleShowMoreTextOpened, // Функция, вызываемая при раскрытии
              }
        }
      >
        <ArticleComponent data={data} />
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
          (tag, index) => (
            <Tag
              style={{
                ...styles.tagStyle,
                ...styles.margL12,
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}
              key={index}
            >
              {/* <div className='icon-container'>{tag.icon}</div> */}
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

        {/* {(!isShowMoreTagsOpened ? tags.slice(0, 6) : tags).map((tag, index) => (
          <Tag
            style={{
              ...styles.tagStyle,
              ...styles.margL12,
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
            key={index}
          >
            <div className='icon-container'>{tag.icon}</div>
            <span
              style={{
                ...styles.textTagStyle,
                ...styles.margL7,
                display: 'inline-block',
              }}
              className='tag-title'
            >
              {tag.title}
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
        ))} */}

        <Button
          type='text'
          style={{
            display: 'flex',
            width: '140px',
            padding: 0,
            ...styles.margB25,
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
