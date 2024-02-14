import React from "react";
import Posts from "./Posts";
import AddPostForm from "./AddPostForm";

function Feeds() {
	return (
		<div className="feeds">
			<div className="feeds-content-sec">
				{/* Post form */}
				<AddPostForm />

				{/* Posts List */}
				<Posts />
			</div>
		</div>
	);
}

export default Feeds;
