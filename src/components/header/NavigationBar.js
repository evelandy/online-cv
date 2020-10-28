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
                            <span className="navBarMenuMed">
                                <span>About</span>
                                <span>Education</span>
                                <span>Experience</span>
                            </span>
                       }
                       {matches.secondMed && 
                            <span className="navBarMenuSecMed">
                                <span>About</span>
                                <span>Education</span>
                                <span>Experience</span>
                            </span>
                       }
                       {matches.large && 
                        <span className="navBarMenuLarge">
                            <span>About</span>
                            <span>Education</span>
                            <span>Experience</span>
                        </span>
                       }
                       {matches.xxl && 
                        <span className="navBarMenuXXL">
                            <span>About</span>
                            <span>Education</span>
                            <span>Experience</span>
                        </span>
                       }
                   </Fragment>
               )} 
            </Media>
        );
    }

    if(showMenu){
        menuItems = 
        <div className="menuItems">
            <span>About</span>
            <span>Education</span>
            <span>Experience</span>
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
