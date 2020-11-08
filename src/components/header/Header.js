import React from 'react';
import NavigationBar from './NavigationBar';
import './header.css';
// import William_Griffin_Resume from '../header/William_Griffin_Resume.pdf';
import axios from 'axios';

export default class Header extends React.Component{
    downloadResume(e) {
        e.preventDefault();
        axios({
            // url: 'http://127.0.0.1:5000/api/getResume',
            url: 'https://williamgriffin.pythonanywhere.com/api/getResume',
            method: 'GET',
            responseType: 'blob',
          }).then((response) => {
             const url = window.URL.createObjectURL(new Blob([response.data]));
             const link = document.createElement('a');
             link.href = url;
             link.setAttribute('download', `William_Griffin's_Resume.pdf`);
             document.body.appendChild(link);
             link.click();
          });
    }

    render() {
        return (
            <header className="headContainer">
                <span className='head'>
                    <form onSubmit={this.downloadResume}>
                        <button className="dlBtn">
                            Resume
                        </button>
                    </form>
                </span>
                <NavigationBar />
            </header>
        );
    }
}
