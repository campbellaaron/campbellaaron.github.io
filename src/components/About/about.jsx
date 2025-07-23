import React from "react";
import IMAGES from "../../assets/img";

const About = () => {
    return (
        <section id="about">
            <h2 className="heading">What I Do</h2>
            <p className="about-me">I'm a single dad who is always chasing the next big opportunity, learning new technologies and putting them to use so that my son can have a better life. I am mostly self-taught, though I do have some college credits mixed in, as I am also attending university part-time to complete my bachelors in Computer Science. I am experienced in WordPress and front-end development, game development, and Adobe Creative Suite.</p>
            <a href="https://www.artstation.com/lickbeans" target="_blank" rel="noopener noreferrer" className="artstation-link"><img src={IMAGES.logoArtStation} alt="ArtStation logo" className="artstation-logo" /></a>
            <p style={{textAlign: 'center'}}>Also, feel free to check out my <a href="https://www.artstation.com/lickbeans" target="_blank" rel="noopener noreferrer" className="artstation-link">ArtStation page</a> to see a few of my visual works.</p>
            <div className="skillCards">
                <div className="skillCard">
                    <img src={IMAGES.logoWP} alt="WordPress logo" className="skillCard__img" />
                    <div className="skillCard__text">
                        <h3 className="skillCard__title">WordPress Development</h3>
                        <p className="skillCard__desc">
                            <ul className="wp-skills">
                                <li>Gutenberg</li>
                                <li>Plugin Development</li>
                                <li>Theme Development</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="skillCard">
                    <img src={IMAGES.logoUnity} alt="Unity Engine logo" className="skillCard__img" />
                    <div className="skillCard__text">
                        <h3 className="skillCard__title">Game Development</h3>
                        <p className="skillCard__desc">
                            <ul className="gamedev-skills">
                                <li>Unreal Engine 4/5</li>
                                <li>Unity Engine</li>
                                <li>HTML / WebGL</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="skillCard">
                    <img src={IMAGES.logoAdobe} alt="Adobe product logo" className="skillCard__img" />
                    <div className="skillCard__text">
                        <h3 className="skillCard__title">Video Editing &amp; Animation</h3>
                        <p className="skillCard__desc">
                            <ul className="adobe-skills">
                                <li>After Effects</li>
                                <li>Photoshop</li>
                                <li>Premiere Pro</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About