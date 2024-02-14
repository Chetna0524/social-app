import * as actionTypes from "../types/userTypes";

const initialState = {
	currentUser: {},
	auth: false,
	loggedIn: false,
	error: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.AUTHENTICATED:
			return {
				currentUser: action.payload,
				auth: true,
				loggedIn: true,
				error: null,
			};
		case actionTypes.NOT_AUTHENTICATED:
			return {
				currentUser: {},
				auth: true,
				loggedIn: false,
				error: action.payload,
			};
		case actionTypes.LOGOUT:
			return {
				currentUser: {},
				auth: true,
				loggedIn: false,
				error: null,
			};

		default:
			return state;
	}
};

export default authReducer;
