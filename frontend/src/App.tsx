import { Layout, PageHeader } from 'antd';
import MainRouter from 'router/MainRouter';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

const MainContainer = styled(Layout)`
  height: 100vh;
`;

function App() {
  return (
    <MainContainer>
      <PageHeader ghost={false} onBack={() => window.history.back()} title="Bicycletron" subTitle="we like bikes" />
      <Layout>
        <ToastContainer />
        <MainRouter />
      </Layout>
    </MainContainer>
  );
}

export default App;
