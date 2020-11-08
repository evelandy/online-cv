import React from 'react';
import EduCard from './EduCard';
import './education.css';

export default function Education() {
    return (
        <div id="education" className="eduContainer">
            <h2 className="eduHeader">
                Education
            </h2>
            {EduCard()}
        </div>
    );
}
