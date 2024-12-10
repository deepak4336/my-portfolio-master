import React from "react";
import { GithubIcon, Linkedin01Icon, LicenseDraftIcon } from "hugeicons-react";

function ProfileHeader() {
	return (
		<header className="profile-header">
			<img
				src="profile_pic.png"
				alt="Ranjith Kumar Kakkarayil"
				className="profile-pic"
			/>
			<h1>Hello, I’m Ranjith</h1>
			<p>
				Someone who loves turning complex problems into simple, efficient
				solutions with the help of cool web technologies.
			</p>
			<div className="social-links">
				<a className="button-default" href="https://github.com/ranjith-work">
					<GithubIcon size={15} /> GitHub
				</a>
				<a
					className="button-default"
					href="https://www.linkedin.com/in/ranjith-kumar-kakkarayil/">
					<Linkedin01Icon size={15} /> LinkedIn
				</a>
				<a className="button-default" href="https://inkedbytes.com">
					<LicenseDraftIcon size={15} /> Blog
				</a>
			</div>
		</header>
	);
}

export default ProfileHeader;
