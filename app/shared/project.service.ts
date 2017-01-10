import { Injectable } from '@angular/core';
import { ourProjects } from './projects';

// this is a service that can be injected into other components

@Injectable()


// add class
export class ProjectService {
	projectPromise = Promise.resolve( ourProjects );

	// gets all projects
	getProjects(){
		return this.projectPromise;
	}	

	// gets one project from the list
	getOneProject(id: number | string){
		return this.projectPromise.then( project=> project.find(project => project.id === +id));
	}
}