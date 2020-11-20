import React from 'react';
import { Card, Col, Row } from 'antd';

const ListProduct = (props) => {
  const { products } = props;
  const { Meta } = Card;
  // console.log(products)

  return (
    <Row gutter={[16, 16]}>
      {products.map((product, idx) =>
        <Col key={idx} sm={24} md={8} lg={6}>
          <Card
            style={{ width: "auto" }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta
              title={product}
              description="This is the description"
            />
          </Card>
        </Col>
      )}
    </Row>
  );
}

export default ListProduct;