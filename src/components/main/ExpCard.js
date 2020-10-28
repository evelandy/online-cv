import React, {Fragment, useState} from 'react';
import Media from 'react-media';
import './experience.css';
import jobs from './Jobs';

export default function ExpCard() {
    const [job, setJob] = useState(jobs);

    function mediaSize() {
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
                            <div className="expCardContainerSm">
                                {job.map((j, i) => (
                                    <div className='expJobSm' key={i}>
                                        <div className="borderSm"></div>
                                        
                                        <div className="expComSm">
                                            {j.Company}
                                        </div>
                                        <div className="expRolSm">
                                            {j.Role}
                                        </div>
                                        <div className="expSkiSm">
                                            {j.Skills}
                                        </div>
                    
                                        <div className="borderSm"></div>
                                    </div>
                                ))}
                            </div>
                        }
                        {matches.medium && 
                            <div className="expCardContainerMed">
                                {job.map((j, i) => (
                                    <div className='expJobMed' key={i}>
                                        <div className="borderMed"></div>
                                        
                                        <div className="expComMed">
                                            {j.Company}
                                        </div>
                                        <div className="expRolMed">
                                            {j.Role}
                                        </div>
                                        <div className="expSkiMed">
                                            {j.Skills}
                                        </div>
                    
                                        <div className="borderMed"></div>
                                    </div>
                                ))}
                            </div>
                        }
                        {matches.large && 
                            <div className="expCardContainerLg">
                                {job.map((j, i) => (
                                    <div className='expJobLg' key={i}>
                                        <div className="borderLg"></div>
                                        
                                        <div className="expComLg">
                                            {j.Company}
                                        </div>
                                        <div className="expRolLg">
                                            {j.Role}
                                        </div>
                                        <div className="expSkiLg">
                                            {j.Skills}
                                        </div>
                    
                                        <div className="borderLg"></div>
                                    </div>
                                ))}
                            </div>
                        }
                        {matches.xxl && 
                            <div className="expCardContainerXXL">
                                {job.map((j, i) => (
                                    <div className='expJobXXL' key={i}>
                                        <div className="borderXXL"></div>
                                        
                                        <div className="expComXXL">
                                            {j.Company}
                                        </div>
                                        <div className="expRolXXL">
                                            {j.Role}
                                        </div>
                                        <div className="expSkiXXL">
                                            {j.Skills}
                                        </div>
                    
                                        <div className="borderXXL"></div>
                                    </div>
                                ))}
                            </div>
                        }
                    </Fragment>
                )}
            </Media>
        );
    }

    return (
        <div>
            {mediaSize()}
        </div>
    );
}
