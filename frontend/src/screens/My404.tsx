import styled from 'styled-components';
import { useHistory } from 'react-router';
import { Button, Divider, Typography } from 'antd';
import { Routes } from 'router/routes';
import Content from 'components/Content';

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 600px;
  padding: 20px;
`;

const Subtitle = styled(Typography.Paragraph)`
  font-size: 1.5em;
`;

const WelcomeScreen = () => {
  const history = useHistory();

  return (
    <Content>
      <Container>
        <Typography.Title>Whoops!</Typography.Title>
        <Typography.Title>Looks like we couldn't find the page you requested</Typography.Title>
        <Button onClick={() => history.push(Routes.HOME)}>Let's go back Home</Button>
        <Divider />
        <Subtitle>Still interested in looking at bikes?</Subtitle>
        <Button onClick={() => history.push(Routes.BRANDS)}>Check out our brands</Button>
      </Container>
    </Content>
  );
};

export default WelcomeScreen;
