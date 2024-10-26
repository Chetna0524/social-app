import * as actionTypes from "../types/userTypes";

import instance from "../../utility/axios";

import { redirect } from "react-router-dom";

export const register = (newUser) => async (dispatch) => {
	try {
		const res = await instance.post("/api/user/register", newUser);

		 dispatch({
			type: actionTypes.REGISTERED,
			//payload: res.data.results,
		})

		redirect("/")
		
	} catch (err) {
		console.log(err);
		dispatch({
			type: actionTypes.NOT_REGISTERED,
			payload: err.response.data,
		});
	}
};

export const login = (user) => async (dispatch) => {
	try {
		const res = await instance.post("/api/user/login", user);
		localStorage.setItem("token", res.data.Token);
		dispatch({
			type: actionTypes.AUTHENTICATED,
			payload: res.data.results,
		});
		redirect("/feeds");
	} catch (err) {
		console.log("errAction", err);
		dispatch({
			type: actionTypes.NOT_AUTHENTICATED,
			payload: err.response.data,
		});
	}
};

/* export const logout = (id) => async(dispatch) => {
	try{

	}catch(err){
		console.log(err)
	}
}
 */
