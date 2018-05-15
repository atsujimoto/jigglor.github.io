import React, { Component } from 'react';
import Display from './display';
import { projects } from '../reducers/projects_reducer';

class Project extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: this.props.match.params.id
		};

		this.renderTech = this.renderTech.bind(this);
		this.renderImgs = this.renderImgs.bind(this);
	}

	renderTech(tech, index) {
		return (
		    <li key={ index }>{ tech }</li>
		);
	}

	renderImgs(img, index) {
		return (
		    <div key={ index } className='project-pics'>
		    	<img src={ img }
			  		 alt=''
			  		 className='responsive-img' />
		    </div>
		);
	}


	render() {
		var project = projects[this.state.id];

		return (
		    <main>
				<section id='single-project'>
					<div className='container'>
						<div className='row project-header'>
							<div className='project center-align flex col s12'>
								<h1>{ project.title }</h1>
								<Display if={ project.github } >
									<div className='links flex between'>
										<a ng-show={ project.github }
							   			   href={ project.github }
							   			   target='_blank'
							   			   rel='noopener noreferrer'>GitHub</a>
										<a href={ project.link }
							   			   target='_blank'
							   			   rel='noopener noreferrer'>Live Site</a>
									</div>
								</Display>
								<Display if={ !project.github } >
									<a href={ project.link }
						   			   target='_blank'
						   			   rel='noopener noreferrer'>Live Site</a>
								</Display>
								<p>{ project.longDesc }</p>
								<div className='flex down'>
									<h4>Technologies Used</h4>
									<div className='tech'>
										<ul>
											{ project.tech.map(this.renderTech) }
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='project-div'>
						<div className='container'>
			  				{ project.img.map(this.renderImgs) }
						</div>
					</div>
				</section>
			</main>
		);
	}
}

export default Project;
