import React, {Fragment} from 'react';
import Media from 'react-media';
import './about.css';

export default function About() {

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
                                    <div id="about" className='aboutContainerSm'>
                                        <h2>About Myself</h2>
                                        <p className="aboutDescriptionSm">
                                            &nbsp; &nbsp; &nbsp; 
                                            My name is William Griffin and I am a self taught software engineer. I have a passion no only to learn code but to implement it every day in my every day life.
                                            <br /> <br />
                                            &nbsp; &nbsp; &nbsp; 
                                            I started my path learning Python. After I felt comfortable with python, I decided that Web Development was the path I enjoyed most. In learning web development 
                                            I started with HTML and CSS, and moved on to JavaScript. I found that a lot of the same fundamentals in JavaScript that I did in Python, so learning what I
                                            needed in JavaScript was much quicker than I initially thought. 
                                            <br /> <br />
                                            &nbsp; &nbsp; &nbsp; 
                                            All that has led me to where I am at now with my more current projects, using React.JS for my front end, Flask for my back end, MySQL for database. 
                                            In fact, everything I am using for this site happens to use that exact same stack. 
                                            <br /> <br />
                                            &nbsp; &nbsp; &nbsp; 
                                            I am currently looking forward to joining a team that I can not only 
                                            learn from, but even pass along what I know in return. Who knows my future employer may even be reading this right now, is it you?
                                        </p>
                                    </div>
                                }
                                {matches.medium && 
                                    <div id="about" className='aboutContainerMed'>
                                        <h2>About Myself</h2>
                                        <p className="aboutDescriptionMed">
                                            &nbsp; &nbsp; &nbsp; 
                                            My name is William Griffin and I am a self taught software engineer. I have a passion no only to learn code but to implement it every day in my every day life.
                                            <br /> <br />
                                            &nbsp; &nbsp; &nbsp; 
                                            I started my path learning Python. After I felt comfortable with python, I decided that Web Development was the path I enjoyed most. In learning web development 
                                            I started with HTML and CSS, and moved on to JavaScript. I found that a lot of the same fundamentals in JavaScript that I did in Python, so learning what I
                                            needed in JavaScript was much quicker than I initially thought. 
                                            <br /> <br />
                                            &nbsp; &nbsp; &nbsp; 
                                            All that has led me to where I am at now with my more current projects, using React.JS for my front end, Flask for my back end, MySQL for database. 
                                            In fact, everything I am using for this site happens to use that exact same stack. 
                                            <br /> <br />
                                            &nbsp; &nbsp; &nbsp; 
                                            I am currently looking forward to joining a team that I can not only 
                                            learn from, but even pass along what I know in return. Who knows my future employer may even be reading this right now, is it you?
                                        </p>
                                    </div>
                                }
                                {matches.large && 
                                    <div id="about" className='aboutContainerLg'>
                                        <h2>About Myself</h2>
                                        <p className="aboutDescriptionLg">
                                            &nbsp; &nbsp; &nbsp; 
                                            My name is William Griffin and I am a self taught software engineer. I have a passion no only to learn code but to implement it every day in my every day life.
                                            <br /> <br />
                                            &nbsp; &nbsp; &nbsp; 
                                            I started my path learning Python. After I felt comfortable with python, I decided that Web Development was the path I enjoyed most. In learning web development 
                                            I started with HTML and CSS, and moved on to JavaScript. I found that a lot of the same fundamentals in JavaScript that I did in Python, so learning what I
                                            needed in JavaScript was much quicker than I initially thought. 
                                            <br /> <br />
                                            &nbsp; &nbsp; &nbsp; 
                                            All that has led me to where I am at now with my more current projects, using React.JS for my front end, Flask for my back end, MySQL for database. 
                                            In fact, everything I am using for this site happens to use that exact same stack. 
                                            <br /> <br />
                                            &nbsp; &nbsp; &nbsp; 
                                            I am currently looking forward to joining a team that I can not only 
                                            learn from, but even pass along what I know in return. Who knows my future employer may even be reading this right now, is it you?
                                        </p>
                                    </div>
                                }
                                {matches.xxl && 
                                    <div id="about" className='aboutContainerXXL'>
                                        <h2>About Myself</h2>
                                        <p className="aboutDescriptionXXL">
                                            &nbsp; &nbsp; &nbsp; 
                                            My name is William Griffin and I am a self taught software engineer. I have a passion no only to learn code but to implement it every day in my every day life.
                                            <br /> <br />
                                            &nbsp; &nbsp; &nbsp; 
                                            I started my path learning Python. After I felt comfortable with python, I decided that Web Development was the path I enjoyed most. In learning web development 
                                            I started with HTML and CSS, and moved on to JavaScript. I found that a lot of the same fundamentals in JavaScript that I did in Python, so learning what I
                                            needed in JavaScript was much quicker than I initially thought. 
                                            <br /> <br />
                                            &nbsp; &nbsp; &nbsp; 
                                            All that has led me to where I am at now with my more current projects, using React.JS for my front end, Flask for my back end, MySQL for database. 
                                            In fact, everything I am using for this site happens to use that exact same stack. 
                                            <br /> <br />
                                            &nbsp; &nbsp; &nbsp; 
                                            I am currently looking forward to joining a team that I can not only 
                                            learn from, but even pass along what I know in return. Who knows my future employer may even be reading this right now, is it you?
                                        </p>
                                    </div>
                                }
                           </Fragment>
                       )}
            </Media>
        );
    }

    return (
        <div>
            {mediaSize()}
        </div>
    );
}
