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

const TinyText = styled(Typography.Text)`
  font-size: 0.3em;
`;

const Subtitle = styled(Typography.Paragraph)`
  font-size: 1.5em;
`;

const WelcomeScreen = () => {
  const history = useHistory();

  return (
    <Content>
      <Container>
        <Typography.Title>Welcome to Bicycletron</Typography.Title>
        <Typography.Title>Wanna see some bikes? We've got some to show you!</Typography.Title>
        <Button onClick={() => history.push(Routes.BRANDS)}>Awesome Bike Brands</Button>
        <Divider />
        <Subtitle>Wanna buy some bikes? Well ...</Subtitle>
        <Typography.Paragraph>
          It would be nice yes but there's other sites that already offer that. Plus, we wanted to
          give you the artisinal 1999 experience of looking at pictures of expensive things because
          we think they're neat.
        </Typography.Paragraph>
        <TinyText>
          Actually the e-commerce thing is out of the MVP due unforseen godly intervention but don't
          tell anybody 🤫.
        </TinyText>
      </Container>
    </Content>
  );
};

export default WelcomeScreen;
