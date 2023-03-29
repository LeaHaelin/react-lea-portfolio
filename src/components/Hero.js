import React from 'react';
import profile from "../assets/images/profile-lea.png";

export const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero__profile--bg">
                <img className="hero__profile" src={profile} alt="profile" />
            </div>
            <div className="hero__content">
                <h1 className="hero__intro">Nice to meet you! I’m <span className="hero__intro--name">Lea Haelin Kim</span>.</h1>
                <p className="hero__text">Based in Barcelona, Spain. I’m a front-end developer passionate about building accessible web apps that users love.</p>
                <a href="#contact-area"><button className="hero__contact contact-me">contact me</button></a>
            </div>
        </div >
    )
}
