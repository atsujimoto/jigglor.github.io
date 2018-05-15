import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <header className='valign-wrapper'>
                    <div className='center-align'>
                        <h1>Andrew Tsujimoto</h1>
                        <h4>Full Stack Web Developer<br/>Karyote, INC</h4>
                    </div>
                </header>
                <main>
                    <section id='about' className='center-align'>
                        <div className='row'>
                            <div className='col s12 m4'>
                                <img id='profile'
                                     className='responsive-img'
                                     src='./img/profile.jpg'
                                     alt='headshot' />
                                <h4>Contact Me!</h4>
                                <p>andrewtsuji@gmail.com</p>
                                <p>(909) 816-1283</p>
                                <a href='https://www.linkedin.com/in/andrewtsujimoto/'
                                   className='about-me-icons'>
                                    <i className='fa fa-linkedin fa-2x'
                                       aria-hidden='true'></i>
                                </a>
                                <a href='https://github.com/jigglor'
                                   target='_blank'
                                   rel='noopener noreferrer'
                                   className='about-me-icons'>
                                    <i className='fa fa-github fa-2x'
                                       aria-hidden='true'></i>
                                </a>
                            </div>
                            <div className='col s0 m1'></div>
                            <div className='left-align col s12 m7'>
                                <h2>About Me</h2>
                                <p>I'm originally from Southern California, but am currently enjoying living in the Pacific Northwest.  I love heading out to Whidbey Island with my girlfriend for the weekend and catching some dungeness crabs or picking some blackberries.<br/><br/>My experince in the service industry has taught me how to work on a team and manage stress.  I love bringing fun and laughter into my life and my work.  I enjoy being a problem solver and I strive to do things efficiently.<br/><br/>I currently work for Karyote, INC building education video games.  I primarily work on a game called Graph Battles, which you can view in my Projects section.  You can also learn more about my company at <a href='http://www.karyoteinc.com'>Karyoteinc.com</a></p>
                                <h4>Skills</h4>
                                <div className='row'>
                                    <div className='col s12 m6 skills'>
                                        <ul>
                                            <li>HTML/CSS</li>
                                            <li>JavaScript/jQuery</li>
                                            <li>Bootstrap/Materialize</li>
                                            <li>SQL/PostgreSQL</li>
                                            <li>Sequelize</li>
                                        </ul>
                                    </div>
                                    <div className='col s12 m6 skills'>
                                        <ul>
                                            <li>MongoDB/Mongoose</li>
                                            <li>Node.js/ExpressJS</li>
                                            <li>Socket.IO</li>
                                            <li>AngularJS</li>
                                            <li>ReactJS/React-Redux</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id='resumes'>
                        <h2>Resumes</h2>
                        <div className='row'>
                            <div className='col s12'>
                                <i className='fa fa-file-pdf-o fa-4x'
                                   aria-hidden='true'></i>
                            </div>
                            <div className='col s12'>
                                <a href='/resumes/Andrew_Tsujimoto.pdf'
                                   className='btn col s12 m3 offset-m3'
                                   download>Download PDF</a>
                                <a href='https://drive.google.com/file/d/1BHbafuihLr55fQPPmkCx-H79yZ1apGwd/view?usp=sharing'
                                   className='btn col s12 m3'
                                   target='_blank'
                                   rel='noopener noreferrer'>View PDF</a>
                            </div>
                            <div className='col s12'>
                                <i className='fa fa-file-text-o fa-4x'
                                   aria-hidden='true'></i>
                            </div>
                            <div className='col s12'>
                                <a href='resumes/Andrew_Tsujimoto.txt'
                                   className='btn col s12 m3 offset-m3'
                                   download>Download Plain Text</a>
                                <a href='https://drive.google.com/file/d/1R4SKLk94tDAiuC5hjZ7J6i1xmBX1r_Nr/view?usp=sharing'
                                   className='btn col s12 m3'
                                   target='_blank'
                                   rel='noopener noreferrer'>View Plain Text</a>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default Home;

