import React from 'react';
import './projects.css';

export default function ProjectCard(props) {
    const openSite = () => {
        let win = window.open(props.site, '_blank');
    }
    return (
        <div onClick={openSite} className={props.body}>
            <img src={props.imgSrc} alt={props.alt} className={props.image} />
            <h2 className={props.title}>{props.name}</h2>
        </div>
    );
}
