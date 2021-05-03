import React from 'react';
import { Row, Layout, Col, Typography, Divider } from 'antd';

const PhysicianInfo = props => {
  const { selectedPhysician = {} } = props;
  const { Header, Content } = Layout;
  const { Title, Text } = Typography;

  return (
    <Layout>
      <Header className="header">
        <Row align="middle">
          <Col span={24}>
            <Title level={4} className="header-title">
              {' '}
              Dream Hospital
            </Title>
          </Col>
        </Row>
      </Header>
      <Content>
        <Row className="physician-info-container">
          <Col
            style={{ display: 'flex', justifyContent: 'center' }}
            xxl={12}
            xxl={12}
            lg={12}
            md={12}
            sm={24}
            xs={24}
          >
            <img
              className="physician-info-image"
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Col>
          <Col xxl={12} xxl={12} lg={12} md={12} sm={24} xs={24}>
            <Title
              level={4}
              style={{ textAlign: 'right', paddingRight: '15px' }}
            >
              گروه
            </Title>
            <div style={{ textAlign: 'right', paddingRight: '25px' }}>
              <Text type="secondary">
                {selectedPhysician.BeneficiaryGroupName}
              </Text>
            </div>
            <Divider style={{ maxWidth: '80%' }} />

            <Title
              level={4}
              style={{ textAlign: 'right', paddingRight: '15px' }}
            >
              تحصیلات
            </Title>
            <div style={{ textAlign: 'right', paddingRight: '25px' }}>
              <Text type="secondary">
                {selectedPhysician.HighestExpertLevel}
              </Text>
            </div>
            <Divider style={{ maxWidth: '80%' }} />

            <Title
              level={4}
              style={{ textAlign: 'right', paddingRight: '15px' }}
            >
              جنسیت
            </Title>
            <div style={{ textAlign: 'right', paddingRight: '25px' }}>
              <Text type="secondary">{selectedPhysician.GenderType}</Text>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default PhysicianInfo;
