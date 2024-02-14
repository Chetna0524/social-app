import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyB0ejrs_yh-fFfJdyKjcMBxBZq3m1uYuXg",
	authDomain: "user-auth-a42cd.firebaseapp.com",
	projectId: "user-auth-a42cd",
	storageBucket: "user-auth-a42cd.appspot.com",
	messagingSenderId: "821030931174",
	appId: "1:821030931174:web:eccf7db47ed21bfd97c927",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
