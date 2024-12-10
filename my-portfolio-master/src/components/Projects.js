import React from "react";
import {
	GithubIcon,
	Globe02Icon,
	ReactIcon,
	JavaScriptIcon,
} from "hugeicons-react";

function Projects() {
	const projects = [
		{
			mainLink: "https://timeontoast.com",
			image: "/projects/timeontoast.png",
			name: "Time On Toast",
			description:
				"Easy to use platform to play around with time using Timer, Alarm, Stopwatch, World Clock, Timezone converter etc.",
			githubLink: null,
			demoLink: "https://timeontoast.com",
			technologies: ["React"],
			status: true,
		},
		{
			mainLink: "https://markmytrip.com",
			image: "/projects/mark_my_trip.png",
			name: "Mark My Trip",
			description:
				"Mark My Trips: Capture, cherish, and relive your travel memories with personalized timelines, interactive maps, and shared experiences.",
			githubLink: null,
			demoLink: "https://markmytrip.com",
			technologies: ["React", "Supabase"],
			status: false,
		},
		{
			mainLink: "https://www.npmjs.com/package/react-collect-feedback",
			image: "/projects/react-collect-feedback.png",
			name: "React Collect Feedback",
			description:
				"React widget for collecting user feedback via ratings, emojis, or text inputs, easily integrating into any React application.",
			githubLink: "https://github.com/ranjith-work/react-collect-feedback",
			demoLink:
				"https://ranjith-work.github.io/plugin-demo/#/react-collect-feedback-demo",
			technologies: ["React", "Javascript"],
			status: true,
		},
		{
			mainLink: "https://www.npmjs.com/package/react-web-notify",
			image: "/projects/react-web-notify.png",
			name: "React Web Notify",
			description:
				"This is a simple light weight notification plugin and similar to a toast with easily customizable features with multiple notifications options.",
			githubLink: "https://github.com/ranjith-work/react-web-notify",
			demoLink:
				"https://ranjith-work.github.io/plugin-demo/#/react-web-notify-demo",
			technologies: ["React", "Javascript"],
			status: true,
		},
	];

	return (
		<section className="projects-section">
			<div className="section-header">Hobby Projects</div>
			<div className="section-description">
				Projects I’ve built during my off hours.
			</div>
			<div className="projects-grid">
				{projects.map((project, index) => (
					<div key={index} className="project-card">
						<div className="project-image">
							<a
								href={`${project.status ? project.mainLink : "#/"}`}
								rel="noreferrer">
								<img src={project.image} alt={`${project.name}`} />
							</a>
						</div>
						<div className="project-details">
							<div className="project-name">{project.name}</div>
							<div className="project-description">{project.description}</div>
						</div>
						<div className="project-footer">
							<div className="project-links">
								{project.status ? (
									<>
										{project.githubLink && (
											<a
												href={project.githubLink}
												target="_blank"
												rel="noopener noreferrer"
												className="project-link"
												data-tooltip="GitHub">
												<GithubIcon size={18} />
											</a>
										)}
										{project.demoLink && (
											<a
												href={project.demoLink}
												target="_blank"
												rel="noopener noreferrer"
												className="project-link"
												data-tooltip="Website">
												<Globe02Icon size={18} />
											</a>
										)}
									</>
								) : (
									<span className="launching-soon">Launching Soon</span>
								)}
							</div>
							<div className="project-logos">
								{project.technologies.map((tech, techIndex) => (
									<span key={techIndex} className="project-tech-logo">
										{tech === "React" ? (
											<div data-tooltip="React Js">
												<ReactIcon size={18} color="#26abff" />
											</div>
										) : tech === "Javascript" ? (
											<div data-tooltip="Javascript">
												<JavaScriptIcon size={18} color="#26abff" />
											</div>
										) : tech === "Supabase" ? (
											<div data-tooltip="Supabase">
												{/* Supabase SVG code */}
											</div>
										) : (
											<span className="project-tech-logo-text">{tech}</span>
										)}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Projects;
