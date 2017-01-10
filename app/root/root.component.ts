// import { Component } from '@angular/core';
// import { ROUTER_DIRECTIVES } from '@angular/router';

// // '@' decorators allow for adding metadata to a class
// @Component({
// 	// this tells the component in index.html to use the contents of the root component
// 	// the root component will be present in the app at all times.
// 	selector: 'my-app',

// 	// An external component where this template will display
// 	templateUrl: 'app/root/root.html',
// 	directives: [	ROUTER_DIRECTIVES ]
// })

// export class RootComponent {
	
// }


import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: 'app/root/root.html',
    directives: [ROUTER_DIRECTIVES]
})
export class RootComponent { }