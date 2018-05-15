import React, { Component } from 'react';
import Display from './display';
import { projects } from '../reducers/projects_reducer';

class ProjectList extends Component {
	constructor(props) {
		super(props);

		this.renderProjects = this.renderProjects.bind(this);
	}

	renderProjects(project, index) {
		return (
		    <div key={ index } className='box'>
          		<div className='card'>
            		<div className='card-image
            						waves-effect
            						waves-block
            						waves-light'>
              			<img className='activator responsive-img'
              				 src={ project.cover }
                   			 alt={ project.title } />
            		</div>
            		<div className='card-content'>
              			<span className='card-title
              							 activator
              							 grey-text
              							 text-darken-4'>
              				{ project.title }
              				<i className='material-icons right'>more_vert</i>
              			</span>
              			<div className='flex between'>
                			<a href={ project.link }
                			   target='_blank'
                               rel='noopener noreferrer'>Live Site</a>
                            <Display if={ project.github } >
                    			<a href={ project.github }
                    			   target='_blank'
                                   rel='noopener noreferrer'>GitHub</a>
                            </Display>
              			</div>
            		</div>
            		<div className='card-reveal'>
              			<span className='card-title grey-text text-darken-4'>
        		    		<a href={`/project/${ index }`}>
        		    			{ project.title }
        		    		</a>
        		    		<i className='material-icons right'>close</i>
        		  		</span>
              			<p>{ project.desc }</p>
            		</div>
          		</div>
        	</div>
		);
	}

    render() {
        return (
            <main>
				<section id='project-list'>
				<div className='container'>
						<div className='row projects-header'>
						<div className='col s12 center-align'>
  							<h2>Projects</h2>
  							<p>I'm always working on something, but here is some of the work I'm most proud of.  Click on a card to see a brief description and a link to even more information about the project.</p>
						</div>
						</div>
				</div>
				<div className='row projects-div'>
						<div className='flex around col s12 cards'>
							{ projects.map(this.renderProjects) }
						</div>
				</div>
				</section>
			</main>
        );
    }
}

export default ProjectList;
