import { createContext, useContext, useState } from 'react';
import { generateUniqueId } from '../untils/generateUniqueId';

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
					id: generateUniqueId()
				}
			]
		})
	}
	
	const selectUser = (userId) => {
		setParams(prev => 
			prev.map(user => 
				user.id === +userId
				? { ...user, isActive: true }
				: { ...user, isActive: false }
			)
		)
	}

	const logout = () => {
		setParams(prev => 
			prev.map(user => { 
				return { 
					...user, 
					isActive: false 
				}
			})
		)
	}
	


	return (
		<UsersContext.Provider value={{ params, addUser, selectUser, logout}}>
			{children}
		</UsersContext.Provider>
	)
}

export const useUsersContext = () => {
  	const context = useContext(UsersContext);
	if (!context) {
		throw new Error('useUsersContext must be used within a UsersProvider')
	}
	return context
}
