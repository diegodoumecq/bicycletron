import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { initMainStore } from './pullstate/store';
import App from './App';

import './normalize.css';
import './App.less';
import 'react-virtualized/styles.css';
import 'react-toastify/dist/ReactToastify.min.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retryOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 1000 * 60, // in ms
    },
  },
});

// This is needed because it initializes the pullstate store based on localStorage
initMainStore();

ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById('root'),
);
