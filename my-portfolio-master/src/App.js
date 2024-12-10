import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileHeader from "./components/ProfileHeader";
import Projects from "./components/Projects";
import ProfileDetails from "./components/ProfileDetails";
import Footer from "./components/Footer";
import SEQQuotes from "./pages/SEOQuotes";

import "./App.css";

function App() {
	return (
		<Router>
			<div className="App">
				<ProfileHeader />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/seo/quotes" element={<SEQQuotes />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

// Define your home page layout here
function HomePage() {
	return (
		<>
			<Projects />
			<ProfileDetails />
			<div style={{ textAlign: "center", margin: "20px 0" }}>
				<a
					href="https://www.buymeacoffee.com/ranjith.kk"
					target="_blank"
					rel="noopener noreferrer">
					<img
						src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
						alt="Buy Me A Coffee"
						style={{ height: "60px", width: "217px" }}
					/>
				</a>
			</div>
		</>
	);
}

export default App;
