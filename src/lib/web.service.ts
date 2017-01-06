import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WebService {
	private config_url = "../assets/third-party/config.json";

	// Resolve HTTP using constructor
	constructor(private http: Http) {
		// code...
	}

	/*getConfig() : Observable<>{
		return this.http.get(this.config_url)
        // ...and calling .json() on the response to return data
        .map((res:Response) => res.json())
        //...errors if any
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

	}*/
	getConfig(): Observable<any>{
		return this.http.get(this.config_url)
        // ...and calling .json() on the response to return data
        .map((res:Response) => res.text())
        //...errors if any
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

	}
	/*getCon(){
		this.http.get(this.config_url)
      	.map((res:Response) => res.json())
      	.subscribe(
        	data => { console.log("data: ",data)},
        	err => console.error(err),
        	() => console.log('done')
      	);
	}*/
}


