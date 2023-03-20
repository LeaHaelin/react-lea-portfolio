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
            skill: ["REACT ", "CSS-GRID ", "SASS"],
            projectUrl: "",
            codeUrl: ""
        }, {
            image: projectAdvice,
            title: "RANDOM ADVICE GENERATOR",
            skill: ["REACT ", "API"],
            projectUrl: "",
            codeUrl: ""
        }, {
            image: projectTimeTrack,
            title: "TIME TRACKING DASHBOARD",
            skill: ["REACT ", "CSS SASS ", "JSON"],
            projectUrl: "",
            codeUrl: ""
        }, {
            image: projectTodo,
            title: "ENTERTAINMENT WEB APP",
            skill: ["REACT ", "CSS SASS"],
            projectUrl: "",
            codeUrl: ""
        }, {
            image: projectDrum,
            title: "DRUM MACHINE",
            skill: ["REACT ", "CSS SASS"],
            projectUrl: "",
            codeUrl: ""
        }, {
            image: projectMarkdwon,
            title: "MARKDOWN PREVIEWER",
            skill: ["REACT ", "CSS SASS"],
            projectUrl: "",
            codeUrl: ""
        },
    ]
    return (
        <div className="projects">
            <div className="projects__header">
                <h2 className="projects__title">Projects</h2>
                <button className="projects__contact contact-me">contact me</button>
            </div>
            <div className="project-contents">
                {projectsArr.map(project => {
                    return (
                        <div className="project">
                            <img className='project__thumbnail' src={project.image} alt={project.title} />
                            <h3 className="project__title">{project.title}</h3>
                            <p className="project__skill">{project.skill} </p>
                            <div className="project__urls">
                                <a className='project__url view-site' href="/">view portfolio</a>
                                <a className='project__url view-code' href="/">view code</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
