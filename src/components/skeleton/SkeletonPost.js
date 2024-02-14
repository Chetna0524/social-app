import React from "react";

const SkeletonPost = () => {
	return (
		<div className="skeleton-post-box">
			<div className="sekeleton-header">
				<div className="skeleton-avatar"></div>
				<div className="skeleton-userName"></div>
			</div>
			<div className="skeleton-content">
				<div className="skeleton-text-lines"></div>
				<div className="skeleton-text-lines"></div>
				<div className="skeleton-text-lines"></div>
			</div>
		</div>
	);
};

export default SkeletonPost;
