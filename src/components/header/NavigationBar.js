import React, {useState, Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Media from 'react-media';
import '../header/NavigationBar.css';

export default function NavigationBar(){
    const [showMenu, setShowMenu] = useState(false);
    let menuItems;
    let menuMask;

    function mediaSize() {
        return (
            <Media queries={{
                small: "(max-width: 425px)",
                medium: "(min-width: 426px) and (max-width: 699px)",
                secondMed: "(min-width: 700px) and (max-width: 1023px)",
                large: "(min-width: 1024px) and (max-width: 1439px)",
                xxl: "(min-width: 1440px)"
            }}>
               {matches => (
                   <Fragment>
                       {matches.small && 
                            <nav>
                                <span className="navbarMenu">
                                    <FontAwesomeIcon 
                                        icon={faBars}
                                        onClick={() => setShowMenu(!showMenu)}
                                    />
                                </span>
                                { menuMask }
                                { menuItems }
                            </nav>
                        }
                       {matches.medium && 
                            <nav className="navBarMenuMed">
                                <span>
                                    <a className="navBarItemMed" href="#about">About</a>
                                </span>
                                <span>
                                    <a className="navBarItemMed" href="#education">Education</a>
                                </span>
                                <span>
                                    <a className="navBarItemMed" href="#experience">Experience</a>
                                </span>
                                <span>
                                    <a className="navBarItemMed" href="#projects">Projects</a>
                                </span>
                            </nav>
                       }
                       {matches.secondMed && 
                            <nav className="navBarMenuSecMed">
                                <span>
                                    <a className="navBarItemSecMed" href="#about">About</a>
                                </span>
                                <span>
                                    <a className="navBarItemSecMed" href="#education">Education</a>
                                </span>
                                <span>
                                    <a className="navBarItemSecMed" href="#experience">Experience</a>
                                </span>
                                <span>
                                    <a className="navBarItemMed" href="#projects">Projects</a>
                                </span>
                            </nav>
                       }
                       {matches.large && 
                        <nav className="navBarMenuLarge">
                            <span>
                                <a className="navBarItemLg" href="#about">About</a>
                            </span>
                            <span>
                                <a className="navBarItemLg" href="#education">Education</a>
                            </span>
                            <span>
                                <a className="navBarItemLg" href="#experience">Experience</a>
                            </span>
                            <span>
                                <a className="navBarItemMed" href="#projects">Projects</a>
                            </span>
                        </nav>
                       }
                       {matches.xxl && 
                        <nav className="navBarMenuXXL">
                            <span>
                                <a className="navBarItemXXL" href="#about">About</a>
                            </span>
                            <span>
                                <a className="navBarItemXXL" href="#education">Education</a>
                            </span>
                            <span>
                                <a className="navBarItemXXL" href="#experience">Experience</a>
                            </span>
                            <span>
                                <a className="navBarItemMed" href="#projects">Projects</a>
                            </span>
                        </nav>
                       }
                   </Fragment>
               )} 
            </Media>
        );
    }

    if(showMenu){
        menuItems = 
        <div className="menuItems">
            <span>
                <a className="navBarItemSm" href="#about">About</a>
            </span>
            <span>
                <a className="navBarItemSm" href="#education">Education</a>
            </span>
            <span>
                <a className="navBarItemSm" href="#experience">Experience</a>
            </span>
            <span>
                <a className="navBarItemSm" href="#projects">Projects</a>
            </span>
        </div>

        menuMask = 
        <div className="menuMask" onClick={() => setShowMenu(false)} >

        </div>
    }

    return (
        <span>
            {mediaSize()}
        </span>
    );
}
