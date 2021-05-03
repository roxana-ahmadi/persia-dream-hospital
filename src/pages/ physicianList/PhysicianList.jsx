import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Spin, Layout, Input, Col, Typography, Divider } from 'antd';
import physicianListController from './physicianList.controller';

const PhysicianList = props => {
  const { Meta } = Card;
  const { Header, Content } = Layout;
  const { Title } = Typography;
  const { Search } = Input;
  const {
    loading,
    generalPhysician,
    specialistPhysician,
    onSearch,
    onSelectPhysician,
  } = physicianListController(props);

  return (
    <Layout>
      <Header className="header">
        <Row style={{ width: '100%' }}>
          <Col xxl={8} lg={8} md={8} sm={24} xs={24}>
            <Title level={4} className="header-title">
              Dream Hospital
            </Title>
          </Col>
          <Col xxl={6} lg={6} md={6} sm={0} xs={0} />
          <Col
            style={{ display: 'flex', justifyContent: 'center' }}
            xxl={10}
            lg={10}
            md={10}
            sm={24}
            xs={24}
          >
            <Search
              onSearch={onSearch}
              placeholder=".برای جستجو نام پزشک را وارد کنید"
            />
          </Col>
        </Row>
      </Header>
      <Content className="content">
        <Spin tip="Loading..." spinning={loading}>
          <Title level={4}>پزشک عمومی</Title>
          <Divider />

          <Row gutter={[48, 24]}>
            {generalPhysician &&
              generalPhysician.map(physician => {
                return (
                  <Col xxl={8} lg={8} md={8} sm={24} xs={24}>
                    <Link to="physician-info">
                      <Card
                        onClick={() => onSelectPhysician(physician)}
                        hoverable
                        cover={
                          <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                        }
                      >
                        <Meta
                          title={physician.UserFullName}
                          description={physician.BeneficiaryGroupName}
                        />
                      </Card>
                    </Link>
                  </Col>
                );
              })}
            <Col>{generalPhysician.length == 0 && 'پزشکی یافت نشد.'}</Col>
          </Row>

          <Title level={4}>پزشک متخصص</Title>
          <Divider />

          <Row gutter={[48, 24]}>
            {specialistPhysician &&
              specialistPhysician.map(physician => {
                return (
                  <Col xxl={8} lg={8} md={8} sm={24} xs={24}>
                    <Link to="physician-info">
                      <Card
                        onClick={() => onSelectPhysician(physician)}
                        hoverable
                        cover={
                          <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                        }
                      >
                        <Meta
                          title={physician.UserFullName}
                          description={physician.BeneficiaryGroupName}
                        />
                      </Card>
                    </Link>
                  </Col>
                );
              })}
            <Col>{specialistPhysician.length == 0 && 'پزشکی یافت نشد.'}</Col>
          </Row>
        </Spin>
      </Content>
    </Layout>
  );
};

export default PhysicianList;
