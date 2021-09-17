import { useEffect, useMemo } from 'react';
import { find } from 'lodash/fp';
import styled from 'styled-components';
import { AutoSizer, List } from 'react-virtualized';
import { Divider, Row, Typography } from 'antd';
import { toast } from 'react-toastify';
import { useBicycles } from 'api/bicycles';
import { useBrands } from 'api/brands';
import BicycleRow, { ROW_HEIGHT } from 'components/BicycleRow';
import SelectFilter from 'components/SelectFilter';
import Content from 'components/Content';
import { MainStore } from 'pullstate/store';
import { sortBicycles } from 'utils/bicycle';

const Title = styled(Typography.Title)`
  text-align: center;
`;

const StyledContent = styled(Content)`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
`;

// Container needed to constraint AutoSizer so it fits the screen
// (basically prevents having two scrollbars)
const ListContainer = styled.div`
  flex: 1;
`;

const BicyclesScreen = () => {
  const { bicycles, bicyclesLoading, bicyclesError } = useBicycles();
  const { brands, brandsLoading, brandsError } = useBrands();
  const sort = MainStore.useState((s) => s.sort);
  const sortedBicycles = useMemo(() => sortBicycles(bicycles, sort), [sort, bicycles]);

  useEffect(() => {
    // TODO: add onError param to useBrands instead of having to use this useEffect
    const error = bicyclesError || brandsError;
    if (error) {
      toast.error(error.message);
    }
  }, [bicyclesError, brandsError]);

  return (
    <StyledContent isLoading={brandsLoading || bicyclesLoading}>
      <Title>All of our bikes</Title>
      <Row>
        <SelectFilter />
      </Row>
      <Divider />
      <ListContainer>
        <AutoSizer>
          {({ height, width }) => (
            <List
              width={width}
              height={height}
              autoHeight={false}
              rowCount={bicycles?.length || 0}
              rowHeight={ROW_HEIGHT}
              sort={sort}
              rowRenderer={({ index, style, key }) => {
                const bicycle = sortedBicycles[index];

                return (
                  <BicycleRow key={key} style={style} bicycle={bicycle} brand={find({ id: bicycle.brand }, brands)} />
                );
              }}
            />
          )}
        </AutoSizer>
      </ListContainer>
    </StyledContent>
  );
};

export default BicyclesScreen;
