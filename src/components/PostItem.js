import React, { useState, useEffect, forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "./Avatar";
import {
	/* FaUserAlt,
	FaYoutube,
	FaCalendarCheck,
	FaFileInvoice, */
	FaRegComment,
} from "react-icons/fa";
/* import { BiLike, BiCommentDetail, BiRepost } from "react-icons/bi";
import { BsSendFill } from "react-icons/bs"; */
import TimeAgo from "./TimeAgo";
import ReactionsButton from "./ReactionsButton";
import Comments from "./Comments";

let PostItem = forwardRef(({ post }, ref) => {
	const [avatar, setAvatar] = useState(false);

	const [toggleComments, setToggleComments] = useState(false);

	useEffect(() => {
		if (post?.photoUrl) {
			setAvatar(true);
		}
	}, []);

	return (
		<>
			<div className="col-lg-12 post-item-box" ref={ref}>
				<div className="post-item-header">
					<Avatar
						avatar={avatar}
						src={post?.photoUrl}
						icon={post?.userName?.charAt(0)}
					/>

					<div className="post-item-info">
						<h2>{post?.userName}</h2>
						<TimeAgo timestamp={post.date} />
					</div>
				</div>
				<div className="post-item-description">
					<p>{post.description}</p>
				</div>

				<div className="post-item-userInputs">
					<div className="post-reaction-btn">
						<ReactionsButton post={post} />
					</div>
					<div className="post-reaction-btn">
						<FaRegComment onClick={() => setToggleComments(!toggleComments)} />
						<span className="comments-count">{post?.comments.length}</span>
					</div>
				</div>

				<Comments
					comments={post?.comments}
					postId={post?._id}
					toggle={toggleComments}
				/>

				{/* <div className="post-uploadPic-sec">
					<ul>
						<li>
							<BiLike />
							<h3>Like</h3>
						</li>
						<li>
							<BiCommentDetail />
							<h3>Comment</h3>
						</li>
						<li>
							<BiRepost />
							<h3>Repost</h3>
						</li>
						<li>
							<BsSendFill />
							<h3>Send</h3>
						</li>
					</ul>
				</div> */}
			</div>
		</>
	);
});

PostItem = React.memo(PostItem);
export default PostItem;
