import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import UserAuth from "./components/UserAuth";
import RegisterForm from "./components/RegisterForm";
import PrivateRoute from "./components/PrivateRoute";

function App() {
	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<UserAuth />} />

					<Route path="/register" element={<RegisterForm />} />

					<Route element={<PrivateRoute />}>
						<Route path="/feeds" element={<Home />} />
					</Route>
				</Route>
			</Routes>
		</>
	);
}

export default App;
