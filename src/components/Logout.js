import React from "react";
import { useDispatch } from "react-redux";
import { auth } from "../utility/firebase-config";

import * as actionTypes from "../redux/types/userTypes";

function Logout() {
	const dispatch = useDispatch();

	const logoutHandle = async () => {
		try {
			dispatch({
				type: actionTypes.LOGOUT,
			});
			console.log("logged out!!!");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<button className="btn-signout" onClick={logoutHandle}>
				Logout
			</button>
		</>
	);
}

export default Logout;
