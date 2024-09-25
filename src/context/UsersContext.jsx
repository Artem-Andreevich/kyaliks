import { createContext, useContext, useState } from 'react';

export const UsersContext = createContext(undefined);

export const UsersProvider = ({ children }) => {

	const initialState = [
		{
			id: 1,
			name: "Juliet Oma",
			email: "julie@yahoo.com",
			isActive: false
		},
		{
			id: 2,
			name: "James Williams",
			email: "jameswilly@gmail.com",
			isActive: false
		},
		{
			id: 3,
			name: "Ahmed Ali",
			email: "ahmedali012@gmail.com",
			isActive: false
		},
		{
			id: 4,
			name: "Grace Funsho",
			email: "gracefunsho@gmail.com",
			isActive: false
		}
	]

	const [params, setParams] = useState(initialState);

	const addUser = (user) => {
		setParams( prev => {
			return [
				...prev,
				{
					...user,
					id: prev.length + 1
				}
			]
		})
	}
	
	const choiseUser = (userId) => {
		setParams(prev => prev.map( user => user.isActive = false))
		const index = params.findIndex( user => user.id === Number(userId))
        const activeUser= {
            ...params[index],
            isActive: true
        }
        setParams( [...params.slice(0, index), activeUser, ...params.slice(index + 1)] )
	}


	return (
		<UsersContext.Provider value={{ params, addUser, choiseUser}}>
			{children}
		</UsersContext.Provider>
	);
};

export const useUsersContext = () => {
  	const context = useContext(UsersContext);
	if (!context) {
		throw new Error('useUsersContext must be used within a UsersProvider');
	}
	return context;
};
