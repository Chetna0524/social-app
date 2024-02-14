import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	reactionsAdded,
	getPosts,
	reactionsRemoved,
} from "../redux/actions/postsActions";

const reactionButtons = {
	like: "👍",
	heart: "💗",
	/* coffee: "☕", */
};

const ReactionsButton = ({ post }) => {
	const dispatch = useDispatch();
	const { currentUser } = useSelector((state) => state.auth);
	const [btn, setBtn] = useState("");

	useEffect(() => {
		Object.entries(post.reactions).map(([key, value]) => {
			if (value.includes(currentUser._id)) {
				/* console.log("key value", key, value);
				console.log("if clicked"); */
				setBtn(key);
			}
		});
	}, [post]);

	const handleReaction = async (name, i, e) => {
		if (post.reactions[name].includes(currentUser._id)) {
			console.log("removed");

			try {
				dispatch(
					reactionsRemoved({
						postId: post._id,
						reactionName: name,
						userId: currentUser._id,
					})
				);
				setBtn(!btn);
				console.log("btn removed", btn);
			} catch (err) {
				console.log(err);
			}
		} else {
			console.log("added");

			try {
				dispatch(
					reactionsAdded({
						postId: post._id,
						reactionName: name,
						userId: currentUser._id,
					})
				);
				setBtn(btn);
				console.log("btn added", btn);
			} catch (err) {
				console.log(err);
			}
		}
	};

	let reactions = Object.entries(reactionButtons).map(([name, emoji], i) => (
		<li key={i}>
			<button
				className="reaction-button reaction-buttonV"
				onClick={(e) => handleReaction(name, i, e)}
				disabled={btn && btn !== name}
			>
				{emoji}{" "}
				<span className="reaction-count">{post.reactions[name].length}</span>
			</button>
		</li>
	));

	return (
		<>
			<ul className="reaction-buttons">{reactions}</ul>
		</>
	);
};

export default ReactionsButton;
