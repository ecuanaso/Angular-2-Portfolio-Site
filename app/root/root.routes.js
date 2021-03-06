"use strict";
// provideRouter is a service that makes the routes available to the app
var router_1 = require('@angular/router');
// This is what we will use to import all the components
var home_component_1 = require('../home/home.component');
var detail_component_1 = require('../detail/detail.component');
var projects_component_1 = require('../projects/projects.component');
var about_component_1 = require('../about/about.component');
var error_component_1 = require('../error/error.component');
var project_service_1 = require('../shared/project.service');
var routes = [
    { path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'detail/:id',
        component: detail_component_1.DetailComponent
    },
    {
        path: 'projects',
        component: projects_component_1.ProjectsComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: '***',
        component: error_component_1.ErrorComponent
    }
];
// this makes provideRouter, routes to all of our components
exports.myRouterProviders = [
    // providing provideRouter with our routes
    router_1.provideRouter(routes),
    project_service_1.ProjectService
];
//# sourceMappingURL=root.routes.js.map