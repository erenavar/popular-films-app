import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainNavigation from './src/navigation /MainNavigation';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainNavigation />
    </QueryClientProvider>
  );
}






