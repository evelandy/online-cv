import React from 'react';
import EduCard from './EduCard';
import './education.css';

export default function Education() {
    return (
        <div id="education" className="eduContainer">
            <div className="eduHeader">
                Education
            </div>
            {EduCard()}
        </div>
    );
}
