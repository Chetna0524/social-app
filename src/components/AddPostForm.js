import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../redux/actions/postsActions";
import Avatar from "./Avatar";
import { FaUserAlt } from "react-icons/fa";

const AddPostForm = () => {
	const [title, setTitle] = useState("");
	const user = useSelector((state) => state.auth.currentUser);

	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			dispatch(
				postAdded({
					userName: user?.name,
					description: title,
					photoUrl: user?.photoUrl,
				})
			);

			setTitle("");
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="post-form">
			<form onSubmit={handleSubmit}>
				<div className="post-form-input">
					<Avatar icon={<FaUserAlt />} />
					<input
						type="text"
						name="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="post-input"
						placeholder="Write something..."
					/>
				</div>
			</form>

			{/* <div className="post-uploadPic-sec">
						<ul>
							<li>
								<HiPhotograph />
								<h3>Photo</h3>
							</li>
							<li>
								<FaYoutube />
								<h3>Video</h3>
							</li>
							<li>
								<FaCalendarCheck />
								<h3>Event</h3>
							</li>
							<li>
								<GrArticle />
								<h3>Write Article</h3>
							</li>
						</ul>
					</div> */}
		</div>
	);
};

export default AddPostForm;
