// // On Init is used to grab data when a component is created.
// import { Component, OnInit } from '@angular/core';
// import { Router, ActicatedRoute } from '@angular/router';
// import { ProjectService } from '../shared/project.service';
// import { Project } from '../shared/project-interface';

// // This is our decorator since we're using routing we don't need a selector.
// @Component({
// 	templateUrl: 'app/detail/detail.html',
// 	styleUrls: ['app/detail/detail.css']
// })

// export class DetailComponent implements OnInit{
// 	// variable to hold our individual project
//     project: Project;

//     constructor( private route: ActivatedRoute, private router: Router, private _projectService: ProjectService) {}

//     ngOnInit() {
//         let id = +this.route.snapshot.params['id'];
//         this._projectService.getOneProject(id).then(project => this.project = project);
//     }
// }

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../shared/project.service';
import { Project } from '../shared/project-interface';

@Component({
    templateUrl: 'app/detail/detail.html',
    styleUrls: ['app/detail/detail.css']
})
export class DetailComponent implements OnInit{
    project: Project;

    constructor( private route: ActivatedRoute, private router: Router, private _projectService: ProjectService) {}

    ngOnInit() {
        let id = +this.route.snapshot.params['id'];
        this._projectService.getOneProject(id).then(project => this.project = project);
    }
}