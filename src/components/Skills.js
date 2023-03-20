import React from 'react'

export const Skills = () => {
    const skillsArr = [
        {
            title: "HTML"
        }, {
            title: "CSS"
        }, {
            title: "Javascript"
        }, {
            title: "React",
        }, {
            title: "SASS",
        }, {
            title: "Responsive Web Design"
        }
    ]
    return (
        <div className='skills'>
            {skillsArr.map(skill => {
                return (
                    <div className="skill">
                        <h2 className="skill__name">{skill.title}</h2>
                    </div>
                )
            })}
        </div>
    )
}
