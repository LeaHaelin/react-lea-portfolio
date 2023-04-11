import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import profile from "../assets/images/profile-lea.png";

export const Hero = () => {
    return (
        <div className='hero' id='home'>
            <div className="hero__profile--bg">
                <img className="hero__profile" src={profile} alt="profile" />
            </div>
            <div className="hero__content">
                <div className="hero__intro-containter">
                    <h1 className="hero__intro">Nice to meet you!<br />I’m<span className="hero__intro--name">
                        <TypeWriterEffect
                            className="type-writer"
                            textStyle={{ textAlign: 'inherit', fontSize: '1em', width: '100%' }}
                            startDelay={100}
                            cursorColor="white"
                            multiText={["Lea Haelin Kim", "a Frontend Developer"]}
                            multiTextLoop
                            typeSpeed={100}
                        /></span></h1></div>
                <p className="hero__text">Based in Barcelona, Spain. I’m a front-end developer passionate about building accessible web apps that users love.</p>
                <a href="#contact-area"><button className="hero__contact contact-me">contact me</button></a>
            </div>
        </div >
    )
}
