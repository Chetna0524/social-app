import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import Avatar from "./Avatar";
import { commentAdded, getPosts } from "../redux/actions/postsActions";

const AddCommentForm = ({ postId }) => {
	const [value, setValue] = useState("");
	const dispatch = useDispatch();

	const currentUser = useSelector((state) => state.auth.currentUser);

	/* console.log("value comment", value); */

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			dispatch(
				commentAdded({
					text: value,
					userId: currentUser._id,
					postId: postId,
				})
			);
			setValue("");
		} catch (err) {
			console.error(err);
		}
	};
	/* console.log("currentUser Comments", currentUser); */

	return (
		<>
			<div className="add-comment-sec-inn">
				<h3 className="add-comment-heading">Add a comment...</h3>
				<form onSubmit={handleSubmit}>
					<div className="post-form-input">
						<Avatar
							avatar={currentUser?.photoUrl ? true : false}
							src={currentUser?.photoUrl}
							icon={currentUser?.name[0]}
						/>
						<input
							type="text"
							name="title"
							value={value}
							className="post-input"
							placeholder="Write something..."
							onChange={(e) => setValue(e.target.value)}
						/>
					</div>
				</form>
			</div>
		</>
	);
};

export default AddCommentForm;
