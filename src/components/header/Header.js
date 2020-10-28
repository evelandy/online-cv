import React from 'react';
import NavigationBar from './NavigationBar';
import './header.css';

export default function Header() {
    return (
        <header className="headContainer">
            <span className="head">
                Resume
            </span>
            <NavigationBar />
        </header>
    );
}
