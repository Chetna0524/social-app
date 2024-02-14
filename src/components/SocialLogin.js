import React from "react";
import { useDispatch } from "react-redux";
import { auth } from "../utility/firebase-config";
import {
	signInWithPopup,
	GoogleAuthProvider,
	FacebookAuthProvider,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import * as actionTYpes from "../redux/types/userTypes";

import { useNavigate } from "react-router-dom";

function SocialLogin() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [user, loading] = useAuthState(auth);

	const signInWithGoogle = async () => {
		const googleProvider = new GoogleAuthProvider();
		try {
			const response = await signInWithPopup(auth, googleProvider).then(() =>
				navigate("/feeds")
			);
			/* console.log("res", response);
			console.log("user", user); */

			const { accessToken } = user;
			const { providerData } = user;

			console.log(accessToken, providerData);

			localStorage.setItem("token", accessToken);

			const pData = JSON.parse(JSON.stringify(providerData));

			console.log("providerData", { ...pData });

			const { displayName, uid, email, photoUrl } = { ...pData };

			console.log("dN", pData[0]?.displayName);
			dispatch({
				type: actionTYpes.AUTHENTICATED,
				payload: {
					_id: pData[0]?.uid,
					name: pData[0]?.displayName,
					email: pData[0]?.email,
					photoUrl: pData[0]?.photoUrl,
				},
			});
		} catch (err) {
			console.log(err);
		}
	};

	const signInWithFacebook = async () => {
		const fbProvider = new FacebookAuthProvider();
		try {
			const response = await signInWithPopup(auth, fbProvider);
			console.log("fb", response);
			/* dispatch({
      type:actionTYpes.AUTHENTICATED,
      payload:user
    }) */
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<p>Or</p>
			<button className="btn btn-info" onClick={signInWithGoogle}>
				Signin with Google
			</button>
			<button className="btn btn-info mt-5" onClick={signInWithFacebook}>
				Signin with Facebook
			</button>
		</>
	);
}

export default SocialLogin;
