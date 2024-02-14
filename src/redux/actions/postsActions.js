import * as actionTypes from "../types/postTypes";

import instance from "../../utility/axios";

export const getPosts = () => async (dispatch) => {
	dispatch({
		type: actionTypes.POSTS_REQUEST_LOADING,
	});
	try {
		const posts = await instance.get("/posts", {
			headers: {
				"auth-token": localStorage.getItem("token"),
			},
		});

		dispatch({
			type: actionTypes.POSTS_SUCCESSFULL,
			payload: posts.data,
		});
		console.log("Posts", posts);
	} catch (err) {
		dispatch({
			type: actionTypes.POSTS_REQUEST_FAILED,
			payload: err,
		});
	}
};

export const postAdded = (newPost) => async (dispatch) => {
	try {
		const response = await instance.post("/posts", newPost); /* .then(() =>
			instance.get("/posts", {
				headers: {
					"auth-token": localStorage.getItem("token"),
				},
			})
		); */
		dispatch({
			type: actionTypes.POST_ADDED,
			payload: response.data,
		});
		console.log("postAdded", response.data);
	} catch (err) {
		console.log(err);
	}
};

export const reactionsAdded = (reaction) => async (dispatch) => {
	try {
		const response = await instance.put("/posts/reactions", {
			reactionName: reaction.reactionName,
			postId: reaction.postId,
			userId: reaction.userId,
		});
		/* .then(() =>
				instance.get("/posts", {
					headers: {
						"auth-token": localStorage.getItem("token"),
					},
				})
			); */
		console.log(response);

		dispatch({
			type: actionTypes.REACTION_ADDED,
			payload: reaction,
		});
	} catch (err) {
		console.log(err);
	}
};

export const reactionsRemoved = (reaction) => async (dispatch) => {
	try {
		const response = await instance.put("/posts/removeReactions", {
			reactionName: reaction.reactionName,
			postId: reaction.postId,
			userId: reaction.userId,
		});
		/* .then(() =>
				instance.get("/posts", {
					headers: {
						"auth-token": localStorage.getItem("token"),
					},
				})
			); */
		console.log("reaction Removed", response);

		dispatch({
			type: actionTypes.REACTION_REMOVED,
			payload: reaction,
		});
	} catch (err) {
		console.log(err);
	}
};

export const commentAdded =
	({ text, postId, userId }) =>
	async (dispatch) => {
		try {
			const response = await instance.put("/posts/comment", {
				comment: text,
				postId: postId,
				userId: userId,
			});
			/* .then(() =>
					instance.get("/posts", {
						headers: {
							"auth-token": localStorage.getItem("token"),
						},
					})
				); */
			dispatch({
				type: actionTypes.COMMENT_ADDED,
				payload: response.data,
			});

			console.log(response);
		} catch (err) {
			console.log(err);
		}
	};

// Single Post
export const getPost = (postId) => async (dispatch) => {
	dispatch({
		type: actionTypes.POST_REQUEST_LOADING,
	});
	try {
		const post = await instance.get(`/posts/${postId}`, {
			headers: {
				"auth-token": localStorage.getItem("token"),
			},
		});

		dispatch({
			type: actionTypes.POST_SUCCESSFULL,
			payload: post.data,
		});
		/* console.log("SinglePosts", post); */
	} catch (err) {
		dispatch({
			type: actionTypes.POST_REQUEST_FAILED,
			payload: err,
		});
	}
};
