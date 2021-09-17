import { Col, Row, RowProps, Typography } from 'antd';
import { Bicycle } from 'api/bicycles';
import { Brand } from 'api/brands';
import { BicycleType } from 'api/types';
import styled from 'styled-components';

export const ROW_HEIGHT = 110;

const StyledRow = styled(Row)`
  height: ${ROW_HEIGHT - 10}px;
  margin-bottom: 10px;
`;

const CenteredCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled(Typography.Text)`
  display: block;
  text-align: center;
  margin-bottom: 5px;
`;

const Price = styled(StyledText)`
  font-size: 24px;
  color: gray;
`;

const StyledImage = styled.img`
  height: ${ROW_HEIGHT - 10}px;
`;

export interface BicycleProps extends RowProps {
  bicycle: Bicycle;
  brand?: Brand;
}

export function getTypeDisplay(type: BicycleType) {
  switch (type) {
    case BicycleType.BMX:
      return 'BMX';
    case BicycleType.CROSS:
      return 'Cross';
    case BicycleType.CRUISER:
      return 'Cruiser';
    case BicycleType.ELECTRIC:
      return 'Electric';
    case BicycleType.FIXED_GEAR:
      return 'Fixed Gear';
    case BicycleType.FOLDING:
      return 'Folding Bike';
    case BicycleType.MOUNTAIN:
      return 'Mountain Bike';
    case BicycleType.RECUMBENT:
      return 'Recumbent';
    case BicycleType.ROAD:
      return 'Road';
    case BicycleType.TOURING:
      return 'Touring';
  }
}

const BicycleRow: React.FC<BicycleProps> = ({ bicycle, brand, ...props }) => {
  return (
    <StyledRow {...props}>
      <CenteredCol span={!brand ? 9 : 5}>
        <StyledImage alt="bicycle" src={bicycle.image} />
      </CenteredCol>
      {!!brand && <CenteredCol span={4}>{brand.name}</CenteredCol>}
      <CenteredCol span={4}>
        <StyledText>Type: {getTypeDisplay(bicycle.type)}</StyledText>
      </CenteredCol>
      <CenteredCol span={3}>
        <StyledText>Model: {bicycle.model}</StyledText>
      </CenteredCol>
      <CenteredCol span={4}>
        <StyledText>Fab Year: {bicycle.fab_year}</StyledText>
      </CenteredCol>
      <CenteredCol span={4}>
        <Price>${bicycle.price}</Price>
      </CenteredCol>
    </StyledRow>
  );
};

export default BicycleRow;
