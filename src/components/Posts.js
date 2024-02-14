import React, { useEffect } from "react";
import PostItem from "./PostItem";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../redux/actions/postsActions";
import Skeleton from "./skeleton/Skeleton";
import FlipMove from "react-flip-move";

function Posts() {
	const { posts, loading, error } = useSelector((state) => state.posts);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, []);

	/* console.log(posts); */

	if (!posts) return;

	const orderedPost = posts.sort((a, b) => b.date.localeCompare(a.date));

	let content;
	if (loading) {
		content = <Skeleton />;
	} else if (!loading) {
		content = (
			<FlipMove>
				{orderedPost.map((post) => (
					<PostItem key={post._id} post={post} postId={post?._id} />
				))}
			</FlipMove>
		);
	} else if (error) {
		content = <p>{error}</p>;
	}

	/* const renderedPosts = orderedPost.map((post) => (
		<PostItem key={post._id} post={post} postId={post?._id} />
	)); */

	return (
		<>
			<div className="container-fluid">
				<div className="row">{content}</div>
			</div>
		</>
	);
}

export default Posts;
