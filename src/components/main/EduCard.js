import React, {useState, Fragment} from 'react';
import './education.css';
import schools from './Schools';
import Media from 'react-media';

export default function EduCard() {
    const [school] = useState(schools);
    
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
                            <div className="eduCardContainerSm">
                                {school.map((sch, i) => (
                                    <div className='eduSchoolSm' key={i}>
                                        <div className="borderSm"></div>
                                        
                                        <div className="eduSchSm">
                                            {sch.school}
                                        </div>
                                        <div className="eduDegSm">
                                            {sch.degree}
                                        </div>
                                        <div className="eduGpaSm">
                                            {sch.gpa}
                                        </div>
                                        <div className='eduTypeSm'>
                                            {sch.type}
                                        </div>
                    
                                        <div className="borderSm"></div>
                                    </div>
                                ))}
                            </div>
                        }
                        {matches.medium && 
                            <div className="eduCardContainerMed">
                                {school.map((sch, i) => (
                                    <div className='eduSchoolMed' key={i}>
                                        <div className="borderMed"></div>
                                        
                                        <div className="eduSchMed">
                                            {sch.school}
                                        </div>
                                        <div className="eduDegMed">
                                            {sch.degree}
                                        </div>
                                        <div className="eduGpaMed">
                                            {sch.gpa}
                                        </div>
                                        <div className='eduTypeMed'>
                                            {sch.type}
                                        </div>
                    
                                        <div className="borderMed"></div>
                                    </div>
                                ))}
                            </div>
                        }
                        {matches.large && 
                            <div className="eduCardContainerLg">
                                {school.map((sch, i) => (
                                    <div className='eduSchoolLg' key={i}>
                                        <div className="borderLg"></div>
                                        
                                        <div className="eduSchLg">
                                            {sch.school}
                                        </div>
                                        <div className="eduDegLg">
                                            {sch.degree}
                                        </div>
                                        <div className="eduGpaLg">
                                            {sch.gpa}
                                        </div>
                                        <div className='eduTypeLg'>
                                            {sch.type}
                                        </div>
                    
                                        <div className="borderLg"></div>
                                    </div>
                                ))}
                            </div>
                        }
                        {matches.xxl && 
                            <div className="eduCardContainerXXL">
                                {school.map((sch, i) => (
                                    <div className='eduSchoolXXL' key={i}>
                                        <div className="borderXXL"></div>
                                        
                                        <div className="eduSchXXL">
                                            {sch.school}
                                        </div>
                                        <div className="eduDegXXL">
                                            {sch.degree}
                                        </div>
                                        <div className="eduGpaXXL">
                                            {sch.gpa}
                                        </div>
                                        <div className='eduTypeXXL'>
                                            {sch.type}
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
