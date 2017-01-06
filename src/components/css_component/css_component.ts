import { Component, Input } from '@angular/core';

import { AppService, StorageServive } from '../../lib/app.service';
import { Broadcaster } from '../../lib/event.service';

@Component({//this is deorator, used to associate metadeta with component class
  selector: 'css-component', //this can be used as an HTML injecting
  templateUrl: 'css_component.html',
  providers: [AppService, StorageServive]
})
export class CssComponent {//The export specifies that, this component will be available outside the file.
	//http://www.engineeringcivil.com/weight-calculator.html

	constructor( private appService: AppService, private storageService: StorageServive, private broadcaster: Broadcaster) {		
	    this.broadcaster.on<string>('LoadCSS').subscribe(message => {
	 		  		
	    });
	}

	ngOnInit(){
	    console.log("css-component");
	}
}
