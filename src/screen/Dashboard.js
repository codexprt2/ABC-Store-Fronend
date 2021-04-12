import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../providers/UserProvider";
import { Redirect } from "react-router-dom";
import { logOut } from "../firebase";

const Dashboard = () => {
	const user = useContext(UserContext);
	const [redirect, setredirect] = useState(null);

	useEffect(() => {
		if (!user) {
			setredirect("/");
		}
	}, [user]);
	if (redirect) {
		<Redirect to={redirect} />;
	}
	return (
		<div>
			<button onClick={logOut}>
				<img
					src='https://img.icons8.com/ios-filled/50/000000/google-logo.png'
					alt='google icon'
				/>
				<span> logout</span>
			</button>
		</div>
	);
};

export default Dashboard;
