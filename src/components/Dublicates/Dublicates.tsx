import React, { useState } from 'react';
import { Typography, Flex, Button, Card, Image } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { DublicatesProps } from '../../interfaces/interfaces';
import * as styles from './styles';
import { globe, user } from '../icons/icons';

const { Title, Text, Link } = Typography;

const Dublicates: React.FC<DublicatesProps> = ({ data }) => {
  const [isDublicatesOpened, setDublicatesOpened] = useState(false);

  const handleDublicatesOpened = () => setDublicatesOpened(!isDublicatesOpened);

  return (
    <div className='dublicates-container' style={styles.containerStyle}>
      <Flex
        style={{
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginBottom: '24px',
          width: '1340px',
        }}
      >
        <Title style={styles.titleStyle} level={3}>
          Dublicates: 10
        </Title>
        <Button style={styles.dFlexButton} type={'text'}>
          <Text style={{ ...styles.colorLightGrey, fontSize: '24px' }}>
            By Relevance
          </Text>
          <DownOutlined
            style={{
              ...styles.colorLightGrey,
              fontSize: '22px',
              marginTop: '3px',
            }}
          />
        </Button>
      </Flex>
      {data && data.HIGHLIGHTS ? (
        (!isDublicatesOpened ? [data?.HIGHLIGHTS[0]] : data?.HIGHLIGHTS).map(
          (text, index) => (
            <Card
              key={index}
              style={{ ...styles.cardStyle, padding: 0, marginBottom: '20px' }}
            >
              <Flex style={styles.flexStyle} gap='small'>
                <Text style={styles.textStyle}>
                  {dayjs(data?.DP).format('D MMM YYYY')}
                </Text>
                <Text
                  style={{ ...styles.textStyle, ...styles.margL20 }}
                >{`${Math.floor(Number(data?.REACH) / 10)}K Reach`}</Text>
                <Button
                  style={{ ...styles.trafficBtnStyle, marginLeft: '960px' }}
                >
                  <Text style={styles.colorGrey}>i</Text>
                </Button>
                <Button style={styles.trafficBtnStyle}></Button>
              </Flex>

              <Title level={2} style={styles.titleStyleCard}>
                {text}
              </Title>

              <Flex
                style={{ ...styles.flexStyle, ...styles.padTop7 }}
                gap='small'
              >
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
                    width={20}
                    src={
                      '/kaspersky-test-task-react-ant-design/images/france-flag.png'
                    }
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
            </Card>
          )
        )
      ) : (
        <p style={styles.textStyle}>There is no data to display.</p>
      )}

      <Button
        style={{
          ...styles.viewDublStyle,
          display: 'flex',
          alignItems: 'center',
          padding: '24px 0',
        }}
        type={'text'}
        onClick={handleDublicatesOpened}
      >
        <DownOutlined
          style={{
            ...styles.colorGrey,
            fontSize: '22px',
            marginTop: '5px',
            transform: isDublicatesOpened ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
        <Text style={{ ...styles.colorGrey, fontSize: '22px' }}>
          View Dublicates
        </Text>
      </Button>
    </div>
  );
};

export default Dublicates;
