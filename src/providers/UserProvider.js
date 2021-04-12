import React, { useState, useEffect, createContext } from "react";
import { auth } from "../firebase";
export const UserContext = createContext({ user: null });
export default ({ children }) => {
	const [user, setuser] = useState(null);
	useEffect(() => {
		auth.onAuthStateChanged(async (user) => {
			if (user) {
				const { displayName, email } = user;
				setUser({
					displayName,
					email,
				});
			}
		});
	}, []);
	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
