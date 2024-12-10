import React from "react";

import { GithubIcon, Linkedin01Icon } from "hugeicons-react";

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<div className="footer">
			<div className="footer-left">
				&copy; {currentYear} Ranjith Kumar Kakkarayil
			</div>
			<div className="footer-center">
				<a
					href="https://github.com/ranjith-work"
					target="_blank"
					rel="noopener noreferrer">
					<GithubIcon size={15} />
				</a>
				<a
					href="https://www.linkedin.com/in/ranjith-kumar-kakkarayil/"
					target="_blank"
					rel="noopener noreferrer">
					<Linkedin01Icon size={15} />
				</a>
			</div>
			<div className="footer-right">
				<a href="https://hugeicons.com/" target="_blank" rel="noreferrer">
					<img
						src="/projects/huge-icons.svg"
						alt="Icon library by Huge Icons"
					/>
				</a>
				<a
					href="https://hostinger.in/?REFERRALCODE=1RANJITH37"
					target="_blank"
					rel="noreferrer">
					<img src="/projects/hostinger-icon.svg" alt="Hosting by Hostinger" />
				</a>
			</div>
		</div>
	);
}

export default Footer;
