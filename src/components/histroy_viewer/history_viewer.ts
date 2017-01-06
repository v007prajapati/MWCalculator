import { Component, Input } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AppService, StorageServive } from '../../lib/app.service';
import { Broadcaster } from '../../lib/event.service';

@Component({//this is deorator, used to associate metadeta with component class
  selector: 'history-viewer', //this can be used as an HTML injecting
  templateUrl: 'history_viewer.html',
  providers: [AppService, StorageServive]
})
export class HistoryViewer {//The export specifies that, this component will be available outside the file.
	//http://www.engineeringcivil.com/weight-calculator.html
	@Input() maxRecord:number;
	public historyData = null;
	constructor(public navCtrl: NavController, private appService: AppService, private storageService: StorageServive, private broadcaster: Broadcaster) {
		
	    this.broadcaster.on<string>('MyEvent').subscribe(message => {
	   		console.log("* Event Received *", message);
	   		this.ngOnInit();
	    });
	}

	ngOnInit(){
	    //called after the constructor and called  after the first ngOnChanges()
	    try{
	    	this.historyData = JSON.parse(this.storageService.getItem("HistoryData"));
	    	console.log("History Data: ",this.historyData);
	    }
	    catch(e){
	    	console.log("Exception: ",e);
	    }
	}

	registerStringBroadcast() {
	    
	  }
}
