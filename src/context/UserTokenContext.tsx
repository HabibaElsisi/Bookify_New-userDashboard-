import React, { createContext, useState } from 'react';

export const UserTokenContext = createContext<{
	isLogin: boolean;
	setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}>({
	isLogin: false,
	setLogin: () => {},
});

export default function UserTokenContextProvider({ children }) {
	const [isLogin, setLogin] = useState(false);
	return (
		<UserTokenContext.Provider value={{ isLogin, setLogin }}>
			{children}
		</UserTokenContext.Provider>
	);
}
