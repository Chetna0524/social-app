import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
	const loggedIn = useSelector((state) => state.auth.loggedIn);
	/* console.log(loggedIn); */

	return <div>{loggedIn ? <Outlet /> : <Navigate to="/" />}</div>;
};

export default PrivateRoute;
