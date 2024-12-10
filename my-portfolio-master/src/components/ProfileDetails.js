import React from "react";

import {
	BirthdayCakeIcon,
	Mortarboard01Icon,
	PermanentJobIcon,
	LoveKoreanFingerIcon,
	GraduationScrollIcon,
	AirplaneTakeOff01Icon,
} from "hugeicons-react";

function ProfileDetails() {
	const profileData = [
		{
			icon: <AirplaneTakeOff01Icon size={30} />,
			header: "First trip to USA",
			description:
				"First travel to USA on deputation by Tata Consultancy Services.",
			month: "April",
			year: "2017",
		},
		{
			icon: <GraduationScrollIcon size={30} />,
			header: "Post Graduate",
			description: "Completed MBA degree from LSC.",
			month: "April",
			year: "2012",
		},
		{
			icon: <LoveKoreanFingerIcon size={30} />,
			header: "Marriage",
			description: "Changed status from single to couple. 😊",
			month: "April",
			year: "2012",
		},
		{
			icon: <AirplaneTakeOff01Icon size={30} />,
			header: "First trip to UK",
			description:
				"First travel to UK on deputation by Tata Consultancy Services.",
			month: "October",
			year: "2011",
		},
		{
			icon: <PermanentJobIcon size={30} />,
			header: "First day of job",
			description: "First day of job at Tata Consultancy Services.",
			month: "November",
			year: "2008",
		},
		{
			icon: <Mortarboard01Icon size={30} />,
			header: "Engineering degree",
			description:
				"Completed Computer Science and Engineering Degree from University of Calicut.",
			month: "July",
			year: "2008",
		},
		{
			icon: <img src="scout.png" alt="Rashtrapati Scout Award" />,
			header: "Rashtrapati Scout Award",
			description:
				"Rashtrapati Scout Award is awarded by K. R. Narayanan, President of India.",
			month: "",
			year: "2002",
		},
		{
			icon: <BirthdayCakeIcon size={30} />,
			header: "Birthday",
			description: "The day that I celebrate every year.",
			month: "23",
			year: "November",
		},
	];
	return (
		<section className="profile-details">
			<div className="section-header">Little bit more about me</div>
			<div className="section-description">
				A quick brief about myself and my small achievements.
			</div>
			<div className="details-grid">
				{profileData.map((profile, index) => (
					<div key={index} className="detail-item">
						<div className="detail-item-icon">{profile.icon}</div>
						<div className="detail-item-data">
							<div>{profile.header}</div>
							<div>{profile.description}</div>
						</div>
						<div className="detail-item-date">
							<div>{profile.month}</div>
							<div>{profile.year}</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default ProfileDetails;
