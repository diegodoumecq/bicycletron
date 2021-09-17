import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Divider, Row, Typography } from 'antd';
import { find } from 'lodash/fp';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import BicycleRow from 'components/BicycleRow';
import BrandIcon from 'components/BrandIcon';
import SelectFilter from 'components/SelectFilter';
import Content from 'components/Content';
import { useBicycles } from 'api/bicycles';
import { useBrands } from 'api/brands';
import { sortBicycles } from 'utils/bicycle';
import { MainStore } from 'pullstate/store';

const Container = styled.div`
  position: relative;
  padding: 20px;
`;

const Title = styled(Typography.Title)`
  text-align: center;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  margin-bottom: 40px;
  text-align: center;
  border-radius: 30px;
  padding: 15px;
  margin: 15px;
  height: 90%;
`;

const BrandBicyclesScreen = () => {
  const brandId = parseInt(useParams<{ brandId: string }>().brandId, 10);
  const sort = MainStore.useState((s) => s.sort);

  const { bicycles, bicyclesLoading, bicyclesError } = useBicycles(brandId);
  const { brands, brandsLoading, brandsError } = useBrands();

  useEffect(() => {
    // TODO: add onError param to useBrands instead of having to use this useEffect
    const error = bicyclesError || brandsError;
    if (error) {
      toast.error(error.message);
    }
  }, [bicyclesError, brandsError]);

  const brand = find({ id: brandId }, brands);

  return (
    <Content isLoading={brandsLoading || bicyclesLoading}>
      <Container>
        {brand?.icon && (
          <LogoContainer>
            <BrandIcon icon={brand.icon} />
            <Title>{brand.name}</Title>
          </LogoContainer>
        )}
        <Row>
          <SelectFilter hideBrandOption />
        </Row>

        <Divider />
        {sortBicycles(bicycles, sort).map((bicycle) => (
          <BicycleRow key={bicycle.sku} bicycle={bicycle} />
        ))}
      </Container>
    </Content>
  );
};

export default BrandBicyclesScreen;
