import React from 'react';
import { Button, Flex, Typography, Layout, Image } from 'antd';
import * as styles from './styles';
import { IData_SnippetNews } from '../../interfaces/interfaces';
import dayjs from 'dayjs';

const { Header } = Layout;
const { Title, Text, Link } = Typography;

interface HeaderProps {
  data: IData_SnippetNews | null;
}

const globe = [
  <svg width='24px' height='24px' viewBox='0 0 32 32' version='1.1'>
    <title>globe</title>
    <desc>Created with Sketch Beta.</desc>
    <defs></defs>
    <g
      id='Page-1'
      stroke='none'
      stroke-width='1'
      fill='none'
      fill-rule='evenodd'
    >
      <g
        id='Icon-Set'
        transform='translate(-204.000000, -671.000000)'
        fill='rgba(255, 255, 255, 0.7)'
      >
        <path
          d='M231.596,694.829 C229.681,694.192 227.622,693.716 225.455,693.408 C225.75,691.675 225.907,689.859 225.957,688 L233.962,688 C233.783,690.521 232.936,692.854 231.596,694.829 L231.596,694.829 Z M223.434,700.559 C224.1,698.95 224.645,697.211 225.064,695.379 C226.862,695.645 228.586,696.038 230.219,696.554 C228.415,698.477 226.073,699.892 223.434,700.559 L223.434,700.559 Z M220.971,700.951 C220.649,700.974 220.328,701 220,701 C219.672,701 219.352,700.974 219.029,700.951 C218.178,699.179 217.489,697.207 216.979,695.114 C217.973,695.027 218.98,694.976 220,694.976 C221.02,694.976 222.027,695.027 223.022,695.114 C222.511,697.207 221.822,699.179 220.971,700.951 L220.971,700.951 Z M209.781,696.554 C211.414,696.038 213.138,695.645 214.936,695.379 C215.355,697.211 215.9,698.95 216.566,700.559 C213.927,699.892 211.586,698.477 209.781,696.554 L209.781,696.554 Z M208.404,694.829 C207.064,692.854 206.217,690.521 206.038,688 L214.043,688 C214.093,689.859 214.25,691.675 214.545,693.408 C212.378,693.716 210.319,694.192 208.404,694.829 L208.404,694.829 Z M208.404,679.171 C210.319,679.808 212.378,680.285 214.545,680.592 C214.25,682.325 214.093,684.141 214.043,686 L206.038,686 C206.217,683.479 207.064,681.146 208.404,679.171 L208.404,679.171 Z M216.566,673.441 C215.9,675.05 215.355,676.789 214.936,678.621 C213.138,678.356 211.414,677.962 209.781,677.446 C211.586,675.523 213.927,674.108 216.566,673.441 L216.566,673.441 Z M219.029,673.049 C219.352,673.027 219.672,673 220,673 C220.328,673 220.649,673.027 220.971,673.049 C221.822,674.821 222.511,676.794 223.022,678.886 C222.027,678.973 221.02,679.024 220,679.024 C218.98,679.024 217.973,678.973 216.979,678.886 C217.489,676.794 218.178,674.821 219.029,673.049 L219.029,673.049 Z M223.954,688 C223.9,689.761 223.74,691.493 223.439,693.156 C222.313,693.058 221.168,693 220,693 C218.832,693 217.687,693.058 216.562,693.156 C216.26,691.493 216.1,689.761 216.047,688 L223.954,688 L223.954,688 Z M216.047,686 C216.1,684.239 216.26,682.507 216.562,680.844 C217.687,680.942 218.832,681 220,681 C221.168,681 222.313,680.942 223.438,680.844 C223.74,682.507 223.9,684.239 223.954,686 L216.047,686 L216.047,686 Z M230.219,677.446 C228.586,677.962 226.862,678.356 225.064,678.621 C224.645,676.789 224.1,675.05 223.434,673.441 C226.073,674.108 228.415,675.523 230.219,677.446 L230.219,677.446 Z M231.596,679.171 C232.936,681.146 233.783,683.479 233.962,686 L225.957,686 C225.907,684.141 225.75,682.325 225.455,680.592 C227.622,680.285 229.681,679.808 231.596,679.171 L231.596,679.171 Z M220,671 C211.164,671 204,678.163 204,687 C204,695.837 211.164,703 220,703 C228.836,703 236,695.837 236,687 C236,678.163 228.836,671 220,671 L220,671 Z'
          id='globe'
        ></path>
      </g>
    </g>
  </svg>,
];

const book = [
  <svg
    width='24px'
    height='24px'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 10.4V20M12 10.4C12 8.15979 12 7.03969 11.564 6.18404C11.1805 5.43139 10.5686 4.81947 9.81596 4.43597C8.96031 4 7.84021 4 5.6 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V16.4C3 16.9601 3 17.2401 3.10899 17.454C3.20487 17.6422 3.35785 17.7951 3.54601 17.891C3.75992 18 4.03995 18 4.6 18H7.54668C8.08687 18 8.35696 18 8.61814 18.0466C8.84995 18.0879 9.0761 18.1563 9.29191 18.2506C9.53504 18.3567 9.75977 18.5065 10.2092 18.8062L12 20M12 10.4C12 8.15979 12 7.03969 12.436 6.18404C12.8195 5.43139 13.4314 4.81947 14.184 4.43597C15.0397 4 16.1598 4 18.4 4H19.4C19.9601 4 20.2401 4 20.454 4.10899C20.6422 4.20487 20.7951 4.35785 20.891 4.54601C21 4.75992 21 5.03995 21 5.6V16.4C21 16.9601 21 17.2401 20.891 17.454C20.7951 17.6422 20.6422 17.7951 20.454 17.891C20.2401 18 19.9601 18 19.4 18H16.4533C15.9131 18 15.643 18 15.3819 18.0466C15.15 18.0879 14.9239 18.1563 14.7081 18.2506C14.465 18.3567 14.2402 18.5065 13.7908 18.8062L12 20'
      stroke='rgba(255, 255, 255, 0.7)'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>,
];

const user = [
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

const _Header: React.FC<HeaderProps> = ({ data }) => {
  // const trafficText = 'Top Traffic: Austria 38% USA 12% Italian 8%';
  const trafficText = `Top Traffic: ${data?.TRAFFIC.map((item) => {
    const percentage = (item.count * 100).toFixed(0);
    const countryName = item.value;
    return `${countryName} ${percentage}%`;
  }).join(' ')}`;

  return (
    <div
      className='header-container'
      style={{
        width: '1380px',
        margin: '0 auto',
      }}
    >
      <Flex style={styles.flexStyle} gap='small'>
        <Text style={styles.textStyle}>
          {dayjs(data?.DP).format('D MMM YYYY')}
        </Text>
        <Text style={{ ...styles.textStyle, ...styles.margL20 }}>
          {`${Math.floor(Number(data?.REACH) / 10)}K Reach`}
        </Text>
        <Text style={{ ...styles.textStyle, ...styles.margL20 }}>
          {trafficText}
        </Text>
        ;
        <Button style={{ ...styles.btnMarkStyle, marginLeft: 'auto' }}>
          <Text style={{ ...styles.colorBlack, textTransform: 'capitalize' }}>
            {data?.SENT}
          </Text>
        </Button>
        <Button style={{ ...styles.trafficBtnStyle, ...styles.margL10 }}>
          <Text style={styles.colorGrey}>i</Text>
        </Button>
        <Button style={{ ...styles.trafficBtnStyle }}></Button>
      </Flex>
      <Title level={2} style={{ ...styles.titleStyle }}>
        {data?.TI}
      </Title>

      <Flex style={{ ...styles.flexStyle, ...styles.padTop7 }} gap='small'>
        <Link style={styles.flexAlCenter} href={`${data?.URL}`}>
          <div className='icon-box'>{globe}</div>
          <Text
            style={{
              ...styles.textStyle,
              ...styles.colorBlue,
              ...styles.margL10,
              ...styles.fontS21,
            }}
          >
            {data?.DOM}
          </Text>
        </Link>

        <Flex style={{ ...styles.flexStyleImage, ...styles.margL20 }}>
          <Image
            style={{ marginTop: '-7px' }}
            width={32}
            src={'/images/france-flag.png'}
          ></Image>
          <Text
            style={{
              ...styles.textStyle,
              ...styles.margL10,
              ...styles.fontS21,
            }}
          >
            {data?.CNTR}
          </Text>
        </Flex>

        <div
          className='header-text-wrapper'
          style={{ ...styles.flexAlCenter, ...styles.margL20 }}
        >
          <div className='icon-box'>{book}</div>
          <Text
            style={{
              ...styles.textStyle,
              ...styles.margL10,
              ...styles.flexAlCenter,
              ...styles.fontS21,
              textTransform: 'capitalize',
            }}
          >
            {data?.LANG}
          </Text>
        </div>

        <div
          className='header-text-wrapper'
          style={{ ...styles.flexAlCenter, ...styles.margL20 }}
        >
          <div className='icon-box'>{user}</div>
          <Text
            style={{
              ...styles.textStyle,
              ...styles.flexAlCenter,
              ...styles.fontS21,
              ...styles.margL10,
            }}
          >
            Emily C., Taormina A., et al.
          </Text>
        </div>
      </Flex>
    </div>
  );
};

export default _Header;
