import React, { Fragment } from 'react';
import Media from 'react-media';
import '../header/cardSection.css';
import businessCard from '../header/OnlinebusinessCard.jpg';

export default function CardSection() {

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
                            <img id='card' className="businessCardSm" src={businessCard} alt="Business card" />
                        }
                        {matches.medium && 
                            <img id='card' className="businessCardMed" src={businessCard} alt="Business card" />
                        }
                        {matches.large && 
                            <img id='card' className="businessCardLg" src={businessCard} alt="Business card" />
                        }
                        {matches.xxl && 
                            <img id='card' className="businessCardXXL" src={businessCard} alt="Business card" />
                        }
                    </Fragment>
                )}
            </Media>
        );
    }

    return (
        <div className="cardSectionContainer">
            {mediaSize()}
        </div>
    );
}
