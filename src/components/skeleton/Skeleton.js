import React from "react";
import SkeletonPost from "./SkeletonPost";

const Skeleton = () => {
	const numberOfPost = [...Array(10).keys()].map((i) => {
		return <SkeletonPost key={i} />;
	});

	return (
		<>
			<div className="skeleton-sec">{numberOfPost}</div>
		</>
	);
};

export default Skeleton;
