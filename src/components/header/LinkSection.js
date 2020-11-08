import React, { Fragment } from 'react';
import Media from 'react-media';
import '../header/LinkSection.css';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import MailOutline from '@material-ui/icons/MailOutline';
import SvgIcon from '@material-ui/icons/GitHub';

export default class LinkSection extends React.Component {

    openLinkedIn = () => {
        window.open('https://www.linkedin.com/in/william-griffin-4a4392b9/', '_blank')
    }

    openGitHub = () => {
        window.open('https://github.com/evelandy', '_blank')
    }

    openEmail = () => {
        window.location.href = `mailto:william.griffin@wrgcv.com`
    }

    mediaSize = () => {
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
                            <div className="iconContainerSm">
                                    <SvgIcon onClick={this.openLinkedIn} className="iconSm" fontSize="large" color='inherit' component={LinkedIn} />
                                    <SvgIcon onClick={this.openGitHub} className="iconSm" fontSize="large" color="inherit" component={GitHub} />
                                    <SvgIcon onClick={this.openEmail} className="iconSm" fontSize="large" color='inherit' component={MailOutline} />
                            </div>
                        }
                        {matches.medium && 
                            <div className="iconContainerMed">
                                    <SvgIcon onClick={this.openLinkedIn} className="iconMed" fontSize="large" color='inherit' component={LinkedIn} />
                                    <SvgIcon onClick={this.openGitHub} className="iconMed" fontSize="large" color="inherit" component={GitHub} />
                                    <SvgIcon onClick={this.openEmail} className="iconMed" fontSize="large" color='inherit' component={MailOutline} />
                            </div>
                        }
                        {matches.large && 
                            <div className="iconContainerLg">
                                    <SvgIcon onClick={this.openLinkedIn} className="iconLg" fontSize="large" color='inherit' component={LinkedIn} />
                                    <SvgIcon onClick={this.openGitHub} className="iconLg" fontSize="large" color="inherit" component={GitHub} />
                                    <SvgIcon onClick={this.openEmail} className="iconLg" fontSize="large" color='inherit' component={MailOutline} />
                            </div>
                        }
                        {matches.xxl && 
                            <div className="iconContainerXXL">
                                    <SvgIcon onClick={this.openLinkedIn} className="iconXXL" fontSize="large" color='inherit' component={LinkedIn} />
                                    <SvgIcon onClick={this.openGitHub} className="iconXXL" fontSize="large" color="inherit" component={GitHub} />
                                    <SvgIcon onClick={this.openEmail} className="iconXXL" fontSize="large" color='inherit' component={MailOutline} />
                            </div>
                        }
                    </Fragment>
                )}
            </Media>
        );
    }

    render() {
        return (
            <div className="LinkSectionContainer">
                {this.mediaSize()}
            </div>
        );
    }
}
