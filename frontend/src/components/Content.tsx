import { Layout, LayoutProps, Spin } from 'antd';
import { FC } from 'react';
import styled from 'styled-components';

const StyledContent = styled(Layout.Content)`
  position: relative;
  overflow-y: auto;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.05);
`;

const SpinnerContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, rgba(255, 255, 255, 0) 0, rgba(0, 0, 255, 0.2) 100%);
`;

const StyledSpinner = styled(Spin)``;

interface ContentProps extends LayoutProps {
  isLoading?: boolean;
}

const Content: FC<ContentProps> = ({ isLoading, children, ...props }) => {
  return (
    <StyledContent {...props}>
      {children}
      {isLoading && (
        <SpinnerContainer>
          <StyledSpinner size="large" />
        </SpinnerContainer>
      )}
    </StyledContent>
  );
};

export default Content;
