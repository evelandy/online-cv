import React from 'react';
import ExpCard from './ExpCard';
import './experience.css';

export default function Experience() {
    return (
        <div className="expContainer">
            <div className="expHeader">
                Experience
            </div>
            {ExpCard()}
        </div>
    );
}