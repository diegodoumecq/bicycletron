import { FC, HTMLAttributes } from 'react';
import { get } from 'lodash/fp';
import * as antIcons from '@ant-design/icons';

export interface BrandIconProps extends HTMLAttributes<HTMLSpanElement> {
  icon: string;
}

const BrandIcon: FC<BrandIconProps> = ({ icon, style, ...props }) => {
  const Icon: FC<HTMLAttributes<HTMLSpanElement>> | undefined = get([icon], antIcons);

  if (!Icon) {
    return null;
  }

  return <Icon style={{ fontSize: '3em', margin: 10, ...style }} {...props} />;
};

export default BrandIcon;
