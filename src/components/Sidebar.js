import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Avatar from "./Avatar";
import { FaCameraRetro } from "react-icons/fa";
import Logout from "./Logout";

function Sidebar() {
	const { currentUser } = useSelector((state) => state.auth);
	const [isPhotoUrl, setIsPhotoUrl] = useState(false);

	useEffect(() => {
		if (currentUser?.photoUrl) {
			setIsPhotoUrl(true);
		}
	}, []);

	return (
		<div className="sidebar">
			<div className="sidebar-userInfo">
				<div className="sidebar-userImg">
					<Avatar
						avatar={isPhotoUrl}
						src={currentUser?.photoUrl}
						icon={<FaCameraRetro />}
					/>
				</div>
				<div className="sidebar-userName">
					<h2>Welcome {currentUser?.name}!!</h2>
					{/* <button className="btn-signout">SignOut</button> */}
					<Logout />
				</div>
				<div className="sidebar-userConnections">
					<div className="sidebar-userConnections-row">
						<h4>
							<span>Connections</span>Grow your Connections
						</h4>
						<p className="sidebar-userConnections-count">29</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
