import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "XXX",
	authDomain: "XXX",
	projectId: "XXX",
	storageBucket: "XXX",
	messagingSenderId: "XXX4",
	appId: "XXXX",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
