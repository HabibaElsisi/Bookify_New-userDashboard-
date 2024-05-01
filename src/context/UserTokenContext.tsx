import { createContext, useState } from 'react';

export const UserTokenContext = createContext(null);

export default function UserTokenContextProvider({ children }) {
	const [isLogin, setLogin] = useState(null);
	return (
		<UserTokenContext.Provider value={{ isLogin, setLogin }}>
			{children}
		</UserTokenContext.Provider>
	);
}
