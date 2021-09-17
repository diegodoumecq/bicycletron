import { Button, Col, Select, Typography } from 'antd';
import styled from 'styled-components';
import { MainStore, updateSort } from 'pullstate/store';
import { SortBy } from 'pullstate/initialState';
import { FC } from 'react';
import { CloseCircleFilled } from '@ant-design/icons';

const FilterCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
`;

const FilterText = styled(Typography)`
  margin-right: 10px;
`;

export interface SelectFilterProps {
  hideBrandOption?: boolean;
}

const SelectFilter: FC<SelectFilterProps> = ({ hideBrandOption }) => {
  let sort = MainStore.useState((s) => s.sort);
  if (hideBrandOption && sort === SortBy.BRAND) {
    sort = null;
  }

  // TODO: refactor this component and add a search bar, store it in pullstate
  // and use Fuse.js to do a fuzzy search over some of the bicycle fields

  return (
    <FilterCol span={8} offset={16}>
      <FilterText>Filter By</FilterText>
      <Select style={{ flex: 'auto' }} value={sort || ''} onChange={(v) => updateSort(v || null)}>
        {!hideBrandOption && <Select.Option value={SortBy.BRAND}>Brand</Select.Option>}
        <Select.Option value={SortBy.PRICE}>Price</Select.Option>
        <Select.Option value={SortBy.TYPE}>Type</Select.Option>
        <Select.Option value={SortBy.MODEL}>Model</Select.Option>
        <Select.Option value={SortBy.YEAR}>Year of Fabrication</Select.Option>
      </Select>
      <Button icon={<CloseCircleFilled />} onClick={() => updateSort(null)} />
    </FilterCol>
  );
};

export default SelectFilter;
