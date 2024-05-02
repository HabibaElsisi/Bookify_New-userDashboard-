import { Navigate } from 'react-router-dom';
import { TOKEN_KEY } from './utils/consts';

export function ProtectedRoute({ children }) {
	if (localStorage.getItem(TOKEN_KEY)) return children;
	else return <Navigate to='/login' />;
}
