import React, { forwardRef } from "react";
import AddCommentForm from "./AddCommentForm";

import FlipMove from "react-flip-move";
import CommentItem from "./CommentItem";
/* 
import moment from "moment"; */

const Comments = ({ comments, toggle, postId }) => {
	/* console.log("Post comments", post.comments); */

	const commentsList = (
		<FlipMove>
			{comments.map((comment) => {
				/* 	let date = moment(comment?.created).utc().toDate();
				console.log("moment date created at", date, comment?.created); */

				/* 	const tDisplay = shallow(); */
				/* const timeLong = moment(comment?.created, moment.ISO_8601).utc().format();
				const timeRelative = moment(timeLong, moment.ISO_8601).utc().fromNow();
		
				console.log("moment timeRelative ", timeLong, timeRelative, comment); */

				/* 	console.log(
					"moment timeRelative timeLong",
		
					timeLong,
					timeRelative,
					comment
				); */

				return <CommentItem key={comment?._id} comment={comment} />;
			})}
		</FlipMove>
	);

	return (
		<div
			className={toggle ? "comments-sec comment-sec-visible" : "comments-sec"}
		>
			{comments.length > 0 && (
				<div className="comments-list">{commentsList}</div>
			)}
			<div className="add-comment-sec">
				<AddCommentForm postId={postId} />
			</div>
		</div>
	);
};

export default Comments;
