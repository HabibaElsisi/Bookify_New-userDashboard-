import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import CounterContextProvider from './context/CounterContext.tsx';
import UserTokenContextProvider from './context/UserTokenContext.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
	<QueryClientProvider client={queryClient}>
		<ReactQueryDevtools
			initialIsOpen={false}
			position='bottom-right'></ReactQueryDevtools>
		<UserTokenContextProvider>
			<CounterContextProvider>
				<App />
			</CounterContextProvider>
		</UserTokenContextProvider>
	</QueryClientProvider>
);
