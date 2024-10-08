import React from "react";
import IMAGES from '../../assets/img'

const Intro = () => {
    return (
        <section id="intro">
            <div className="info col">
                <p className="info__greeting">Hello,</p>
                <h1 className="info__intro">I'm <span className="name">Aaron Campbell</span>, <br/>Web &amp; Game Developer</h1>
                <p className="info__description">I am a skilled WordPress developer with additional training in game development</p>
                <button className="hireBtn" onClick={() => {document.getElementById('contact').scrollIntoView({behavior: 'smooth'});}}><img src={IMAGES.iconBriefcase} alt="Briefcase icon" /> Hire Me</button>
            </div>
            <div className="img col">
                <img src={IMAGES.imageAWC} alt="Aaron Profile Pic" />
            </div>
        </section>
    )
}

export default Intro