import React from "react";

function Avatar({ avatar, icon, src }) {
	return (
		<>
			<span className="avatar">{avatar ? <img src={src} /> : icon}</span>
		</>
	);
}

export default Avatar;
