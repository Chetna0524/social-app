import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaLinkedin } from "react-icons/fa";
import NavLinkItem from "./NavLinkItem";
import {
	FaHome,
	FaNetworkWired,
	FaArchive,
	FaRocketchat,
	FaBell,
	FaUserAlt,
} from "react-icons/fa";

import { CgMenuGridO } from "react-icons/cg";

import Avatar from "./Avatar";

function Header() {
	const { currentUser } = useSelector((state) => state.auth);
	const [isPhotoUrl, setIsPhotoUrl] = useState(false);
	const [isMenu, setInMenu] = useState(false);

	console.log(currentUser);

	useEffect(() => {
		if (currentUser.photoUrl) {
			setIsPhotoUrl(true);
		}
	}, []);

	const toggleMenu = () => {
		setInMenu(!isMenu);
	};

	console.log(isPhotoUrl);
	return (
		<>
			<div className="navbar-custom">
				<div className="container">
					<h2 className="linkedin-logo">
						<FaLinkedin />
					</h2>
					<nav>
						<div className="menu-list-mob">
							<p className="menu-icon" onClick={toggleMenu}>
								<CgMenuGridO />
								<span>Menu</span>
							</p>
							<div className="user-mob">
								{isPhotoUrl ? (
									<NavLinkItem
										avatar={isPhotoUrl}
										src={currentUser?.photoUrl}
										link="/"
										title={currentUser?.name}
									/>
								) : (
									<NavLinkItem
										avatar={isPhotoUrl}
										userName={currentUser?.name[0]}
										link="/"
										title={currentUser?.name}
									/>
								)}
							</div>
						</div>

						<ul className={isMenu ? "menuInn" : "menu"}>
							<li>
								<NavLinkItem icon={<FaHome />} link="/" title="Home" />
							</li>
							<li>
								<NavLinkItem
									icon={<FaNetworkWired />}
									link="/"
									title="Network"
								/>
							</li>
							<li>
								<NavLinkItem icon={<FaArchive />} link="/" title="Jobs" />
							</li>
							<li>
								<NavLinkItem
									icon={<FaRocketchat />}
									link="/"
									title="Messaging"
								/>
							</li>
							<li>
								<NavLinkItem icon={<FaBell />} link="/" title="Notifications" />
							</li>
							<li className="user-desk">
								{isPhotoUrl ? (
									<NavLinkItem
										avatar={isPhotoUrl}
										src={currentUser?.photoUrl}
										link="/"
										title={currentUser?.name}
									/>
								) : (
									<NavLinkItem
										avatar={isPhotoUrl}
										userName={currentUser?.name[0]}
										link="/"
										title={currentUser?.name}
									/>
								)}
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</>
	);
}

export default Header;
