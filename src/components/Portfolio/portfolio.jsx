import React, {useState} from "react";
import IMAGES from "../../assets/img";


const Portfolio = () => {
    // State to track the currently selected category
    const [selectedCategory, setSelectedCategory] = useState('all');
    
    // Click handler to update the selected category
    const handleMenuClick = (event) => {
        const category = event.target.getAttribute('data-project-type');
        setSelectedCategory(category);
    };


    return (
        <section id="portfolio">
            <h2 className="heading">My Projects</h2>
            <p className="portfolio-desc">Check out my works below! I have projects from previous clients using WordPress, as well as my game development prototypes. Click the buttons below to filter based on project type.</p>
            <ul className="filterMenu">
                <li data-project-type="all" onClick={handleMenuClick} className="filterMenu__item">All</li>
                <li data-project-type="wordpress" onClick={handleMenuClick} className="filterMenu__item">WordPress</li>
                <li data-project-type="react" onClick={handleMenuClick} className="filterMenu__item">React</li>
                <li data-project-type="dotnet" onClick={handleMenuClick} className="filterMenu__item">.NET</li>
                <li data-project-type="gamedev" onClick={handleMenuClick} className="filterMenu__item">Game Development</li>
                <li data-project-type="marketing" onClick={handleMenuClick} className="filterMenu__item">Marketing</li>
                <li data-project-type="misc" onClick={handleMenuClick} className="filterMenu__item">Miscellaneous</li>
            </ul>
            <div className="portfolio-gallery">
                <div className={`portfolio-gallery__item ${selectedCategory === 'all' || selectedCategory === 'wordpress' ? 'visible' : 'hidden'}`} data-project-type="wordpress">
                    <img src={IMAGES.projHeadlineBooster} alt="" className="portfolio-gallery__item-image" />
                    <h4 className="portfolio-gallery__item-title"><a href="https://github.com/campbellaaron/wp-ai-headline-booster/releases/tag/v1.0.4" target="_blank" rel="noopener noreferrer" className="item-link">Headline Booster &mdash; AI-Powered Title Suggestions</a></h4>
                    <p className="portfolio-gallery__item-description">A Gutenberg-integrated WordPress plugin that sends the current post title (and optional excerpt) to OpenAI, generates 3–5 alternative headlines, scores each one (0–100) based on length and structure, and lets editors apply the best title with a single click. Built with PHP, the WordPress REST API, OpenAI’s Chat Completions API, and the block editor JS APIs—no custom build step required.</p>
                </div>
                <div className={`portfolio-gallery__item ${selectedCategory === 'all' || selectedCategory === 'wordpress' ? 'visible' : 'hidden'}`} data-project-type="wordpress">
                    <img src={IMAGES.projLbiSite} alt="" className="portfolio-gallery__item-image" />
                    <h4 className="portfolio-gallery__item-title"><a href="https://lickbeansinteractive.com" target="_blank" rel="noopener noreferrer" className="item-link">Lickbeans Interactive Website</a></h4>
                    <p className="portfolio-gallery__item-description">A headless WordPress website that was initially a ReactJS front end but was then converted to NextJS to handle some more heavy lifting, especially with metadata and SEO.</p>
                </div>
                <div className={`portfolio-gallery__item ${selectedCategory === 'all' || selectedCategory === 'misc' ? 'visible' : 'hidden'}`} data-project-type="misc">
                    <img src={IMAGES.laravelPM} alt="" className="portfolio-gallery__item-image" />
                    <h4 className="portfolio-gallery__item-title"><a href="https://github.com/campbellaaron/laravel-project-management" target="_blank" rel="noopener noreferrer" className="item-link">Laravel Project Management App</a></h4>
                    <p className="portfolio-gallery__item-description">Using Laravel+Vite, Tailwind, Laravel Breeze, and TinyMCE, this is a project management app that also features task time-tracking and a dashboard for admins and managers to track user activity and project progress.</p> <p><span className="text-xs proj-note">Note: Due to the nature of the app, I could not find a suitable free hosting tier for demonstration.</span></p>
                </div>
                <div className={`portfolio-gallery__item ${selectedCategory === 'all' || selectedCategory === 'react' ? 'visible' : 'hidden'}`} data-project-type="react">
                    <img src={IMAGES.projCrewChat} alt="" className="portfolio-gallery__item-image" />
                    <h4 className="portfolio-gallery__item-title"><a href="https://mern-group-chat.onrender.com" target="_blank" rel="noopener noreferrer" className="item-link">Crew Chat MERN App</a></h4>
                    <p className="portfolio-gallery__item-description">An ongoing MERN stack app built with Vite React, Firebase Storage, and TailwindCSS. Features file sharing, profile photos, and group chat capabilities. <strong>STILL TO COME: </strong>Email verification, Unread Messages notifications, Channel Admins to delete group channels</p>
                </div>
                {/* Udacity: Draw Insights from Marketing Data */}
                <div className={`portfolio-gallery__item ${selectedCategory === 'all' || selectedCategory === 'marketing' ? 'visible' : 'hidden'}`} data-project-type="marketing">
                    <img src={IMAGES.projMarketingData} alt="" className="portfolio-gallery__item-image" />
                    <h4 className="portfolio-gallery__item-title">
                        <a href="/assets/docs/draw-insights-from-marketing-data-aaronc.pdf" target="_blank" rel="noopener noreferrer" className="item-link">
                            Draw Insights from Marketing Data
                        </a>
                    </h4>
                    <p className="portfolio-gallery__item-description">A Google Ads performance report built using mock client data. Interpreted ad performance using KPIs and visualizations, and provided strategic recommendations.</p>
                </div>

                {/* Udacity: Marketing Your Content */}
                <div className={`portfolio-gallery__item ${selectedCategory === 'all' || selectedCategory === 'marketing' ? 'visible' : 'hidden'}`} data-project-type="marketing">
                    <img src={IMAGES.projMarketingContent} alt="" className="portfolio-gallery__item-image" />
                    <h4 className="portfolio-gallery__item-title">
                        <a href="/assets/docs/marketing-your-content-project-aaronc.pdf" target="_blank" rel="noopener noreferrer" className="item-link">
                            Marketing Your Content
                        </a>
                    </h4>
                    <p className="portfolio-gallery__item-description">Created a content marketing strategy that aligns with the buyer journey, developed campaign goals, and selected optimal distribution channels.</p>
                </div>

                {/* Udacity: Get Ready to Market */}
                <div className={`portfolio-gallery__item ${selectedCategory === 'all' || selectedCategory === 'marketing' ? 'visible' : 'hidden'}`} data-project-type="marketing">
                    <img src={IMAGES.projReadyToMarket} alt="" className="portfolio-gallery__item-image" />
                    <h4 className="portfolio-gallery__item-title">
                        <a href="/assets/docs/get-ready-to-market-project-aaronc.pdf" target="_blank" rel="noopener noreferrer" className="item-link">
                            Get Ready to Market
                        </a>
                    </h4>
                    <p className="portfolio-gallery__item-description">Defined buyer personas and customer journey stages, crafted campaign objectives and KPIs, and prepared messaging aligned with audience segments.</p>
                </div>
                <div className={`portfolio-gallery__item ${selectedCategory === 'all' || selectedCategory === 'dotnet' ? 'visible' : 'hidden'}`} data-project-type="dotnet">
                    <img src={IMAGES.projComicCrud} alt="" className="portfolio-gallery__item-image" />
                    <h4 className="portfolio-gallery__item-title"><a href="https://comicbooksweb20240714221856.azurewebsites.net/" target="_blank" rel="noopener noreferrer" className="item-link">Comic Book CRUD App</a></h4>
                    <p className="portfolio-gallery__item-description">A CRUD app built in .NET Core 8 using an N-Tier structure, implementing the Repository and Unit of Work pattern. Connected to an Azure SQL database, using EntityFramework Core and ASP.NET Identity. One of my most recent, yet favorite, projects.</p>
                </div>
                <div className={`portfolio-gallery__item ${selectedCategory === 'all' || selectedCategory === 'wordpress' ? 'visible' : 'hidden'}`} data-project-type="wordpress">
                    <img src={IMAGES.projPETAwissen} alt="" className="portfolio-gallery__item-image" />
                    <h4 className="portfolio-gallery__item-title"><a href="https://wissenschaft-statt-tierversuche.de/" target="_blank" rel="noopener noreferrer" className="item-link">Wissenschaft statt Tierversuche</a></h4>
                    <p className="portfolio-gallery__item-description">One of the few PETA Germany sites I worked on.</p>
                </div>
                <div className={`portfolio-gallery__item ${selectedCategory === 'all' || selectedCategory === 'wordpress' ? 'visible' : 'hidden'}`} data-project-type="wordpress">
                    <img src={IMAGES.projPETAveganStart} alt="" className="portfolio-gallery__item-image" />
                    <h4 className="portfolio-gallery__item-title"><a href="https://www.veganstart.de/" target="_blank" rel="noopener noreferrer" className="item-link">PETA Germany VeganStart</a></h4>
                    <p className="portfolio-gallery__item-description">PETA Germany site to promote a 30-day program for going vegan. Hero was one of many custom blocks built as a separate plugin.</p>
                </div>
                <div className={`portfolio-gallery__item ${selectedCategory === 'all' || selectedCategory === 'misc' ? 'visible' : 'hidden'}`} data-project-type="misc">
                    <img src={IMAGES.projPETA2Dissection} alt="" className="portfolio-gallery__item-image" />
                    <h4 className="portfolio-gallery__item-title"><a href="https://dissection.peta2.com" target="_blank" rel="noopener noreferrer" className="item-link">peta2 Dissection Kills</a></h4>
                    <p className="portfolio-gallery__item-description">A non-WordPress PHP website under the peta2 campaign to bring awareness about the dangers and unethical practice of animal dissection in schools.</p>
                </div>
                <div className={`portfolio-gallery__item ${selectedCategory === 'all' || selectedCategory === 'wordpress' ? 'visible' : 'hidden'}`} data-project-type="wordpress">
                    <img src={IMAGES.projMAAC} alt="" className="portfolio-gallery__item-image" />
                    <h4 className="portfolio-gallery__item-title"><a href="https://maacinc.com/" target="_blank" rel="noopener noreferrer" className="item-link">Mid-Atlantic Aerospace Complex</a></h4>
                    <p className="portfolio-gallery__item-description">The new WordPress site built for MAAC, based out of West Virginia. </p>
                </div>
                <div className={`portfolio-gallery__item ${selectedCategory === 'all' || selectedCategory === 'wordpress' ? 'visible' : 'hidden'}`} data-project-type="wordpress">
                    <img src={IMAGES.projINFMCP} alt="" className="portfolio-gallery__item-image" />
                    <h4 className="portfolio-gallery__item-title"><a href="https://infmcp.org/" target="_blank" rel="noopener noreferrer" className="item-link">Indiana Farmers' Market Community of Practice</a></h4>
                    <p className="portfolio-gallery__item-description">A custom theme built using custom PHP development and Elementor in WordPress for a client in Indiana (Aspect6 is the company who contracted it).</p>
                </div>
                <div className={`portfolio-gallery__item ${selectedCategory === 'all' || selectedCategory === 'wordpress' ? 'visible' : 'hidden'}`} data-project-type="wordpress">
                    <img src={IMAGES.projStarTech} alt="" className="portfolio-gallery__item-image" />
                    <h4 className="portfolio-gallery__item-title"><a href="https://startech-llc.com/" target="_blank" rel="noopener noreferrer" className="item-link">STAR Technologies, LLC</a></h4>
                    <p className="portfolio-gallery__item-description">A custom-built WordPress theme for a manufacturing client in West Virginia </p>
                </div>
                <div className={`portfolio-gallery__item ${selectedCategory === 'all' || selectedCategory === 'gamedev' ? 'visible' : 'hidden'}`} data-project-type="gamedev">
                    <img src={IMAGES.projSurvival} alt="" className="portfolio-gallery__item-image" />
                    <h4 className="portfolio-gallery__item-title"><a href="https://store.steampowered.com/app/1565290/Survival_Horror_8436/" target="_blank" rel="noopener noreferrer" className="item-link">Survival Horror #8,436</a></h4>
                    <p className="portfolio-gallery__item-description">A small cat-n-mouse style survival horror game made in Unreal Engine 4</p>
                </div>
                <div className={`portfolio-gallery__item ${selectedCategory === 'all' || selectedCategory === 'gamedev' ? 'visible' : 'hidden'}`} data-project-type="gamedev">
                    <img src={IMAGES.projRoguelike} alt="" className="portfolio-gallery__item-image" />
                    <h4 className="portfolio-gallery__item-title"><a href="https://play.unity.com/api/v1/games/game/84092676-9c69-40db-8d9e-2123a1d788aa/build/latest/frame" target="_blank" rel="noopener noreferrer" className="item-link">2D Scavenger Roguelike (Enhanced Edition)</a></h4>
                    <p className="portfolio-gallery__item-description">A turn-based dungeon crawler built in Unity. This project expands on the classic 2D Roguelike framework with robust custom systems including persistent save data, RPG statistics, and reactive enemy AI.</p>
                </div>
                <div className={`portfolio-gallery__item ${selectedCategory === 'all' || selectedCategory === 'gamedev' ? 'visible' : 'hidden'}`} data-project-type="gamedev">
                    <img src={IMAGES.projSumo} alt="" className="portfolio-gallery__item-image" />
                    <h4 className="portfolio-gallery__item-title"><a href="https://play.unity.com/mg/other/sumo-ball-prototype-4-create-with-code" target="_blank" rel="noopener noreferrer" className="item-link">Sumo Ball Prototype</a></h4>
                    <p className="portfolio-gallery__item-description">A prototype where you move around a platform, avoiding enemies and the dangerous abyss simultaneously </p>
                </div>
                <div className={`portfolio-gallery__item ${selectedCategory === 'all' || selectedCategory === 'gamedev' ? 'visible' : 'hidden'}`} data-project-type="gamedev">
                    <img src={IMAGES.proj3dPlatform} alt="" className="portfolio-gallery__item-image" />
                    <h4 className="portfolio-gallery__item-title"><a href="https://play.unity.com/p/65f506a509d62c0153ea6421" target="_blank" rel="noopener noreferrer" className="item-link">3d Platformer Prototype</a></h4>
                    <p className="portfolio-gallery__item-description">One of the Zenva course games, "Making Your First 3D Game", but this has sound effects and music and a ScriptableObjects scoring system.</p>
                </div>
                <div className={`portfolio-gallery__item ${selectedCategory === 'all' || selectedCategory === 'react' ? 'visible' : 'hidden'}`} data-project-type="react">
                    <img src={IMAGES.projWeather} alt="" className="portfolio-gallery__item-image" />
                    <h4 className="portfolio-gallery__item-title"><a href="https://polite-sea-007e0730f.1.azurestaticapps.net/" target="_blank" rel="noopener noreferrer" className="item-link">TuHawt Weather v2.0</a></h4>
                    <p className="portfolio-gallery__item-description">A React web app using the OpenWeatherMap API to pull in weather data (U.S.-based only)</p>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
