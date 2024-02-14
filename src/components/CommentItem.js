import React, { forwardRef } from "react";
import Avatar from "./Avatar";
import TimeAgo from "./TimeAgo";

const CommentItem = forwardRef(({ comment }, ref) => {
	return (
		<li ref={ref}>
			<div className="comment-user-avatar">
				<Avatar
					avatar={comment?.postedBy?.photoUrl ? true : false}
					src={comment?.postedBy?.photoUrl}
					icon={comment?.postedBy?.name[0]}
				/>
			</div>
			<div className="comment-content">
				<div className="comment-user-info">
					<span className="comment-user-name">{comment?.postedBy?.name}</span>
					<TimeAgo timestamp={comment?.created} comment={comment} />
				</div>
				<p>{comment.comment}</p>
			</div>
		</li>
	);
});

export default CommentItem;
