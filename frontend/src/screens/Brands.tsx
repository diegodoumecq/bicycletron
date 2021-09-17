import { useEffect } from 'react';
import { Button, Col, Divider, Row, Typography } from 'antd';
import { chunk } from 'lodash/fp';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { SearchOutlined } from '@ant-design/icons';
import { Routes } from 'router/routes';
import { useBrands } from 'api/brands';
import BrandIcon from 'components/BrandIcon';
import Content from 'components/Content';

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  margin-bottom: 40px;
  text-align: center;
  cursor: pointer;
  border-radius: 30px;
  padding: 15px;
  margin: 15px;
  height: 90%;
`;

const Title = styled(Typography.Title)`
  text-align: center;
`;

const Container = styled.div`
  padding: 20px;
`;

const AllBikesMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ShowAllButton = styled(Button)`
  margin-left: 20px;
`;

const BrandsScreen = () => {
  const { brands, brandsLoading, brandsError } = useBrands();

  const history = useHistory();

  useEffect(() => {
    // TODO: add onError param to useBrands instead of having to use this useEffect
    if (brandsError) {
      toast.error(brandsError.message);
    }
  }, [brandsError]);

  return (
    <Content isLoading={brandsLoading}>
      <Container>
        <AllBikesMessage>
          Wanna see every bike in one big list?
          <ShowAllButton icon={<SearchOutlined />} onClick={() => history.push(Routes.ALL_BIKES)}>
            All Bikes
          </ShowAllButton>
        </AllBikesMessage>
        <Divider />
        <Title>Awesome Bike Brands</Title>
        {chunk(4, brands).map((brandsChunk) => (
          <Row key={brandsChunk[0].id}>
            {brandsChunk.map(({ id, name, icon }) => (
              <Col md={6} xs={12} key={id}>
                <LogoContainer onClick={() => history.push(Routes.BRAND_BIKES.replace(':brandId', `${id}`))}>
                  <BrandIcon icon={icon} />
                  {name}
                </LogoContainer>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </Content>
  );
};

export default BrandsScreen;
