import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import SearchPage from "./pages/SearchPage";

// Create a client
const queryClient = new QueryClient()

function App() {
  return ( 
  <QueryClientProvider client={queryClient}>
    <SearchPage/>
  </QueryClientProvider>
    );
}

export default App;
