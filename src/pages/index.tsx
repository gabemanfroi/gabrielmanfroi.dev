import '../styles/globals.css';

import { HomePage } from '@/components/HomePage';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/core/theme/theme';
import { RefsProvider } from '@/providers/refsProvider';

const queryClient = new QueryClient();

const Home = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RefsProvider>
          <HomePage />
          <ReactQueryDevtools initialIsOpen={false} />
        </RefsProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Home;
