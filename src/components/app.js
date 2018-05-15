import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './home';
import Project from './project';
import ProjectsList from './projects_list';

class App extends Component {
    render() {
        return (
            <div>
                <ul id='hamburger-dropdown' className='dropdown-content'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/about'>Contact</a></li>
                    <li><a href='/projects'>Projects</a></li>
                    <li><a href='/resumes'>Resume</a></li>
                </ul>
                <div className='navbar-fixed'>
                    <nav>
                        <div className='nav-wrapper'>
                            <a href=''
                               className='right dropdown-trigger hamburger hide-on-large-only'
                               data-target='hamburger-dropdown'>
                               <i className='material-icons'>menu</i>
                            </a>
                            <a href='/'
                               className='brand-logo hide-on-med-and-down'>
                                <i className='material-icons right'>home</i>
                            </a>
                            <ul id='nav-mobile' className='right hide-on-med-and-down'>
                                <li><a href='/#resumes'>Resume</a></li>
                                <li><a href='/#about'>Contact Me</a></li>
                                <li><a href='/projects'>Projects</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <BrowserRouter>
                    <Switch>
                        <Route path='/project/:id' component={ Project } />
                        <Route path='/projects' component={ ProjectsList } />
                        <Route path='/' component={ Home } />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
