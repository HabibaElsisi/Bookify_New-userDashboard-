import { useContext, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';

import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';

import NotFound from './components/NotFound/NotFound';

import { UserTokenContext } from './context/UserTokenContext';
// import { ProtectedRoute } from './ProtectedRoute';
import Layout from './components/Layout';
import ForgotPassword from './components/ForgotPassword';
import Books from './components/books';
import AllGenre from './components/Genre/AllGenre';
export default function App() {
	const { setLogin } = useContext(UserTokenContext);

	useEffect(() => {
		if (localStorage.getItem('userToken'))
			setLogin(localStorage.getItem('userToken'));
	}, []);

	const routes = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{ index: true, element: <Home /> },
				// { path: 'home', element: <ProtectedRoute><Home/> </ProtectedRoute> },
				{ path: 'login', element: <LogIn /> },
				{ path: 'register', element: <Register /> },
				{ path: 'ForgotPassword', element: <ForgotPassword /> },
				{ path: 'books/:id', element: <Books /> },
				{ path: 'AllGenre', element: <AllGenre /> },

				{ path: '*', element: <NotFound /> },
			],
		},
	]);

	return <RouterProvider router={routes} />;
}
