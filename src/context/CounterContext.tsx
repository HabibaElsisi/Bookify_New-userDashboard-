import { createContext, useState } from 'react';

export const CounterContext = createContext(null); //use Contex

export default function CounterContextProvider({ children }) {
	const [counter, setCounter] = useState(0);
	function increase() {
		setCounter(counter + 1);
	}

	return (
		<CounterContext.Provider value={{ counter, increase }}>
			{children}
		</CounterContext.Provider>
	);
}
