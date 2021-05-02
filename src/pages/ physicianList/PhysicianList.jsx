import React from 'react';
import { Card, Row, Col, Spin, Alert } from 'antd';
import physicianListController from './physicianList.controller';

const PhysicianList = () => {
  const { Meta } = Card;
  const { physicianList, loading } = physicianListController();
  console.log(physicianList);
  return (
    <div>
      <Spin tip="Loading..." spinning={loading}>
        <Row gutter={[48, 24]}>
          {physicianList &&
            physicianList.map(physician => {
              return (
                <Col span={8}>
                  <Card
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
                </Col>
              );
            })}
        </Row>
      </Spin>
    </div>
  );
};

export default PhysicianList;
