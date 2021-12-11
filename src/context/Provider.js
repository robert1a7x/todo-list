import React, { createContext } from 'react';

export const myContext = createContext();

export const Provider = ({ children }) => {

	const context ={

	}
	return (
		<myContext.Provider value={ context }>
			{ children }
		</myContext.Provider>
	);
};
