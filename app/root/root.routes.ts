// provideRouter is a service that makes the routes available to the app
import { provideRouter, RouterConfig }  from '@angular/router';
// This is what we will use to import all the components
import { HomeComponent } from '../home/home.component';
import { DetailComponent } from '../detail/detail.component';
import {ProjectsComponent } from '../projects/projects.component';
import {AboutComponent } from '../about/about.component';
import {ErrorComponent } from '../error/error.component';
import { ProjectService } from '../shared/project.service';

const routes: RouterConfig = [
	{ 	path: '', 
		redirectTo: 'home',
		pathMatch: 'full'
    },

    {
    	path: 'home',
    	component: HomeComponent
    },

    {
    	path: 'detail/:id',
    	component: DetailComponent
    },

    {
    	path: 'projects',
    	component: ProjectsComponent
    },
    {
    	path: 'about',
    	component: AboutComponent
    },

    {
    	path: '***',
    	component: ErrorComponent
    }
];


// this makes provideRouter, routes to all of our components
export const myRouterProviders = [
	// providing provideRouter with our routes
	provideRouter(routes),
	ProjectService
];