import * as actionTypes from "../types/postTypes";
import { combineReducers } from "redux";

const initialState = {
	posts: [],
	loading: false,
	error: null,
};

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.POSTS_REQUEST_LOADING:
			return {
				posts: [],
				loading: true,
				error: null,
			};
		case actionTypes.POSTS_SUCCESSFULL:
			let loadedPosts = action.payload.map((post) => {
				if (!post.reactions)
					post.reactions = {
						like: 0,
						heart: 0,
						/* coffee: 0, */
					};
				return post;
			});
			return {
				posts: loadedPosts,
				loading: false,
				error: null,
			};
		case actionTypes.POSTS_REQUEST_FAILED:
			return {
				posts: [],
				loading: true,
				error: action.payload,
			};
		case actionTypes.POST_ADDED:
			return {
				...state,
				posts: [...state.posts, action.payload],
			};
		case actionTypes.COMMENT_ADDED:
			const post = action.payload;
			const postId = post._id;
			const latestComment = post.comments[post.comments.length - 1];

			console.log("latestComment", latestComment);

			console.log("action.payload comments", action.payload);
			return {
				...state,
				posts: state.posts.map((post) =>
					post._id === postId
						? {
								...post,
								comments: [...post.comments, latestComment],
								gotIt: "comment added",
						  }
						: { ...post, newElse: "newElseComment" }
				),
			};
		case actionTypes.REACTION_ADDED:
			const reaction = action.payload;
			const reactionName = reaction.reactionName;
			console.log(action.payload);
			return {
				...state,

				posts: state.posts.map((post) =>
					post._id === reaction.postId
						? {
								...post,
								reactions: {
									...post.reactions,
									[reactionName]: [
										...post.reactions[reactionName],
										reaction.userId,
									],
								},
								gotIt: "yeeeeeeh reactionAdded!!!",
						  }
						: { ...post, newElse: "newElse" }
				),
			};
		case actionTypes.REACTION_REMOVED:
			const reactionRemoved = action.payload;
			const reactionRemovedName = reactionRemoved.reactionName;
			console.log("removed reaction", action.payload);
			return {
				...state,

				posts: state.posts.map((post) =>
					post._id === reactionRemoved.postId
						? {
								...post,
								reactions: {
									...post.reactions,
									[reactionRemovedName]: post.reactions[
										reactionRemovedName
									].filter((reaction) => reaction !== reactionRemoved.userId),
								},
								gotIt: "yeeeeeeh reactionRemoved!!!",
						  }
						: { ...post, newElse: "newElse Removed!!" }
				),
			};

		/* case actionTypes.COMMENT_ADDED:
			return {
				...state,
				posts: action.payload,
			}; */
		/* case actionTypes.REACTION_ADDED:
			return {
				...state,
				posts: action.payload,
			}; */
		/* case actionTypes.REACTION_REMOVED:
			return {
				...state,
				posts: action.payload,
			}; */

		/* 	case actionTypes.REACTION_ADDED:
			const { postId, reactionName, userId } = action.payload;

			const id = userId;
			console.log(action.payload);
			return {
				...state,

				posts: state.posts.map((post) =>
					post._id === postId 
						? {
								...post,
								reactions: {
									...post.reactions,
									[reactionName]: [...post.reactions[reactionName], id],
								},
								gotIt: "yeeeeeeh!!!",
						  }
						: { ...post, newElse: "newElse" }
				),
			}; */

		default:
			return state;
	}
};

export default postsReducer;
