import * as actionTypes from "../types/userTypes";

const initialState = {
	currentUser: {},
	auth: false,
	loggedIn: false,
	error: { authError: null, registerError: null },
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.REGISTERED:
			return {
				...state,
				error: { authError: null, registerError: null },
			};
		case actionTypes.NOT_REGISTERED:
			return {
				...state,
				error: { ...state.error, registerError: action.payload },
			};

		case actionTypes.AUTHENTICATED:
			return {
				...state,
				currentUser: action.payload,
				auth: true,
				loggedIn: true,
				error: { authError: null, registerError: null },
			};
		case actionTypes.NOT_AUTHENTICATED:
			return {
				currentUser: {},
				auth: true,
				loggedIn: false,
				error: { ...state.error, authError: action.payload },
			};
		case actionTypes.LOGOUT:
			return {
				...state,
				currentUser: {},
				auth: true,
				loggedIn: false,
			};

		default:
			return state;
	}
};

export default authReducer;
