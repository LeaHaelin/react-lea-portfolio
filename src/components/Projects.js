import React from 'react'
import projectNewHome from "../assets/images/thumbnail-new-home.jpg";
import projectAdvice from "../assets/images/thumbnail-advice-generator.jpg";
import projectTimeTrack from "../assets/images/thumbnail-time-tracking-dashboard.jpg";
import projectTodo from "../assets/images/thumbnail-todo-list.jpg";
import projectDrum from "../assets/images/thumbnail-drum-machine.png";
import projectMarkdwon from "../assets/images/thumbnail-markdown-previewer.png";
export const Projects = () => {
    const projectsArr = [
        {
            image: projectNewHome,
            title: "NEW HOMPAGES",
            skill: ["CSS-GRID"],
            projectUrl: "https://react-news-homepage.vercel.app/",
            codeUrl: "https://github.com/LeaHaelin/frontend-mentor-news-hompage"
        }, {
            image: projectAdvice,
            title: "RANDOM ADVICE GENERATOR",
            skill: ["API"],
            projectUrl: "https://advice-generator-1w8cu3jjv-leahaelin.vercel.app/",
            codeUrl: "https://github.com/LeaHaelin/Advice_generator"
        }, {
            image: projectTimeTrack,
            title: "TIME TRACKING DASHBOARD",
            skill: ["JSON"],
            projectUrl: "https://lea-time-tracking-dashboard.vercel.app/",
            codeUrl: "https://github.com/LeaHaelin/Time_tracking_dashboard"
        }, {
            image: projectTodo,
            title: "TODO LIST",
            skill: ["REACT"],
            projectUrl: "https://lea-react-todo.vercel.app/",
            codeUrl: "https://github.com/LeaHaelin/react-project__todo-list"
        }, {
            image: projectDrum,
            title: "DRUM MACHINE",
            skill: ["REACT"],
            projectUrl: "https://fcc-react-drum-machine-rho.vercel.app/",
            codeUrl: "https://github.com/LeaHaelin/FCC-React-3-Drum-Machine"
        }, {
            image: projectMarkdwon,
            title: "MARKDOWN PREVIEWER",
            skill: ["REACT"],
            projectUrl: "https://fcc-react-markdown-previewer-phi.vercel.app/",
            codeUrl: "https://github.com/LeaHaelin/FCC-React-2-Markdown-Previewer"
        },
    ]
    return (
        <div className="projects">
            <div className="projects__header">
                <h2 className="projects__title">Projects</h2>
                <a href="#contact-area"><button className="projects__contact contact-me">contact me</button></a>
            </div>
            <div className="project-contents">
                {projectsArr.map(project => {
                    return (
                        <div className="project">
                            <img className='project__thumbnail' src={project.image} alt={project.title} />
                            <h3 className="project__title">{project.title}</h3>
                            <p className="project__skill">{project.skill} </p>
                            <div className="project__urls">
                                <a className='project__url view-site' href={project.projectUrl} target="_blank" rel="noreferrer">view project</a>
                                <a className='project__url view-code' href={project.codeUrl} target="_blank" rel="noreferrer">view code</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
