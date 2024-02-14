import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

const PUBLIC_URL = "https://chetna0524.github.io/social-app/";

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router basename={PUBLIC_URL}>
				<Routes>
					<Route path="/*" element={<App />} />
				</Routes>
			</Router>
		</Provider>
	</React.StrictMode>
);

reportWebVitals();
