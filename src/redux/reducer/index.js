import { combineReducers } from "redux";
import authReducer from "./authReducer";
import postsReducer from "./postsReducer";

const allReducers = combineReducers({
	auth: authReducer,
	posts: postsReducer,
});

export default allReducers;
