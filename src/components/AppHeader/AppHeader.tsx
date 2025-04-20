import React from 'react';
import { Button, Flex, Typography, Image } from 'antd';
import * as styles from './styles';
// import { HeaderProps } from '../../interfaces/interfaces';
import dayjs from 'dayjs';
import { nanoid } from 'nanoid';
import { globe, book, user } from '../icons/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const { Title, Text, Link } = Typography;

const AppHeader: React.FC = () => {
  const data = useSelector((state: RootState) => state.data.data);

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
          Top Traffic:
          {data?.TRAFFIC?.map((item, index) => {
            const percentage = (item.count * 100).toFixed(0);
            const countryName = item.value;
            return (
              <Text
                key={nanoid()}
                style={{ ...styles.margL10, ...styles.textStyle }}
              >
                {countryName} {percentage}%
                {index < (data?.TRAFFIC?.length ?? 0) - 1 ? ' ' : ''}
              </Text>
            );
          })}
        </Text>
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

export default AppHeader;
