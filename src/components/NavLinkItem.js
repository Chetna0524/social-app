import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

function NavLinkItem({ icon, title, linkUrl, avatar, src, userName }) {
	return (
		<>
			<Link to={linkUrl}>
				{icon && <span>{icon}</span>}
				{avatar && <Avatar avatar={avatar} src={src} icon={userName} />}
				{userName && <Avatar avatar={avatar} src={src} icon={userName} />}
				<h4>{title}</h4>
			</Link>
		</>
	);
}

export default NavLinkItem;
