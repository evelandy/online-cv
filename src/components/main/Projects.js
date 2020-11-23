import React, {Fragment} from 'react';
import Media from 'react-media';
import ProjectCard from './ProjectCard';
import './projects.css';
import grdev from './grdev.png';
import conference from './conference.png';
import cityGuide from './city-guide.png';

export default function Projects() {
    return (
        <Media queries={{
            small: "(max-width: 425px)",
            medium: "(min-width: 426px) and (max-width: 1023px)",
            large: "(min-width: 1024px) and (max-width: 1439px)",
            xxl: "(min-width: 1440px)"
        }}>
            {matches => (
                <Fragment>
                    {matches.small &&
                        <div id="projects" className="projectsContainer">
                            <h2 className='projectsHeader'>Projects</h2>
                            <ProjectCard 
                                body={'projectCardBody'}
                                image={'projectImage'}
                                title={'projectTitle'}
                                imgSrc={grdev}
                                alt={'grdev.com site'}
                                name={'www.grdev.com'}
                                site={'https://main.d1uidfzso1gl6d.amplifyapp.com/'}
                            />
                            <ProjectCard
                                body={'projectCardBody'}
                                image={'projectImage'}
                                title={'projectTitle'}
                                imgSrc={conference}
                                alt={'conference site'}
                                name={'conference site'}
                                site={'https://evelandy.github.io/conference-site/'}
                            />
                            <ProjectCard
                                body={'projectCardBody'}
                                image={'projectImage'}
                                title={'projectTitle'}
                                imgSrc={cityGuide}
                                alt={'city-guide site'}
                                name={'city-guide site'}
                                site={'https://evelandy.github.io/City-guide/'}
                            />
                        </div>
                    }
                    {matches.medium &&
                        <div id="projects" className="medProjectsContainer">
                            <h2 className='medProjectsHeader'>Projects</h2>
                            <ProjectCard 
                                body={'medProjectCardBody'}
                                image={'medProjectImage'}
                                title={'medProjectTitle'}
                                imgSrc={grdev}
                                alt={'grdev.com site'}
                                name={'www.grdev.com'}
                                site={'https://main.d1uidfzso1gl6d.amplifyapp.com/'}
                            />
                            <ProjectCard
                                body={'medProjectCardBody'}
                                image={'medProjectImage'}
                                title={'medProjectTitle'}
                                imgSrc={conference}
                                alt={'conference site'}
                                name={'conference site'}
                                site={'https://evelandy.github.io/conference-site/'}
                            />
                            <ProjectCard
                                body={'medProjectCardBody'}
                                image={'medProjectImage'}
                                title={'medProjectTitle'}
                                imgSrc={cityGuide}
                                alt={'city-guide site'}
                                name={'city-guide site'}
                                site={'https://evelandy.github.io/City-guide/'}
                            />
                        </div>
                    }
                    {matches.large &&
                        <div id="projects" className="lgProjectsContainer">
                            <h2 className='lgProjectsHeader'>Projects</h2>
                            <ProjectCard 
                                body={'lgProjectCardBody'}
                                image={'lgProjectImage'}
                                title={'lgProjectTitle'}
                                imgSrc={grdev}
                                alt={'grdev.com site'}
                                name={'www.grdev.com'}
                                site={'https://main.d1uidfzso1gl6d.amplifyapp.com/'}
                            />
                            <ProjectCard
                                body={'lgProjectCardBody'}
                                image={'lgProjectImage'}
                                title={'lgProjectTitle'}
                                imgSrc={conference}
                                alt={'conference site'}
                                name={'conference site'}
                                site={'https://evelandy.github.io/conference-site/'}
                            />
                            <ProjectCard
                                body={'lgProjectCardBody'}
                                image={'lgProjectImage'}
                                title={'lgProjectTitle'}
                                imgSrc={cityGuide}
                                alt={'city-guide site'}
                                name={'city-guide site'}
                                site={'https://evelandy.github.io/City-guide/'}
                            />
                        </div>
                    }
                    {matches.xxl &&
                        <div id="projects" className="XXLProjectsContainer">
                            <h2 className='XXLProjectsHeader'>Projects</h2>
                            <ProjectCard 
                                body={'XXLProjectCardBody'}
                                image={'XXLProjectImage'}
                                title={'XXLProjectTitle'}
                                imgSrc={grdev}
                                alt={'grdev.com site'}
                                name={'www.grdev.com'}
                                site={'https://main.d1uidfzso1gl6d.amplifyapp.com/'}
                            />
                            <ProjectCard
                                body={'XXLProjectCardBody'}
                                image={'XXLProjectImage'}
                                title={'XXLProjectTitle'}
                                imgSrc={conference}
                                alt={'conference site'}
                                name={'conference site'}
                                site={'https://evelandy.github.io/conference-site/'}
                            />
                            <ProjectCard
                                body={'XXLProjectCardBody'}
                                image={'XXLProjectImage'}
                                title={'XXLProjectTitle'}
                                imgSrc={cityGuide}
                                alt={'city-guide site'}
                                name={'city-guide site'}
                                site={'https://evelandy.github.io/City-guide/'}
                            />
                        </div>
                    }
                </Fragment>
            )}
        </Media>
    );
}
