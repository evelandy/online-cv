import React from 'react';
import NavigationBar from './NavigationBar';
import './header.css';


export default class Header extends React.Component{

    async downloadResume() {
        await fetch(`http://williamgriffin.pythonanywhere.com/getResume`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
    }

    render() {
        return (
            <header className="headContainer">
                <span className="head">
                    <button className="dlBtn" onClick={this.downloadResume}>
                        Resume
                    </button>
                </span>
                <NavigationBar />
            </header>
        );
    }
}
