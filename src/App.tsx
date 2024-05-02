import { useContext, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';

import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';

import NotFound from './components/NotFound/NotFound';

import { UserTokenContext } from './context/UserTokenContext';
import { ProtectedRoute } from './ProtectedRoute';
import Layout from './components/Layout';
import ForgotPassword from './components/ForgotPassword';
import Books from './components/books';
import AllGenre from './components/Genre/AllGenre';
import { TOKEN_KEY } from './utils/consts';

export default function App() {
	const { setLogin } = useContext(UserTokenContext);

	useEffect(() => {
		if (localStorage.getItem(TOKEN_KEY))
			setLogin(!!localStorage.getItem(TOKEN_KEY));
	}, []);

	const routes = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					index: true,
					element: (
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					),
				},
				{ path: 'login', element: <LogIn /> },
				{ path: 'register', element: <Register /> },
				{ path: 'ForgotPassword', element: <ForgotPassword /> },
				{
					path: 'books/:id',
					element: (
						<ProtectedRoute>
							<Books />
						</ProtectedRoute>
					),
				},
				{
					path: 'AllGenre',
					element: (
						<ProtectedRoute>
							<AllGenre />
						</ProtectedRoute>
					),
				},

				{ path: '*', element: <NotFound /> },
			],
		},
	]);

	return <RouterProvider router={routes} />;
}
