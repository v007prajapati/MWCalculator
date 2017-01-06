import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
	UnitConvertI(value: number, type: string): number { 
		if(type=="cm")
			value = value/2.54;
		if(type=="m")
			value = (value*100)/2.54;
		if(type== "mm")
			value = (value/10)/2.54;
		if(type=="ft")
			value = value*12;
		if(type=="yd")
			value = value*36;
		return value;
	}
	UnitConvertF(value: number, type: string): number { 
		if (type == "cm")
            value = (value / 2.54) / 12;
        if (type == "m")
            value = ((value * 100) / 2.54) / 12;
        if (type == "mm")
            value = ((value / 10) / 2.54) / 12;
        if (type == "in")
            value = value / 12;
        if (type == "yd")
            value = value * 3;

        return value;
	}
	CheckNum(value, label): boolean{
		let String1 = new String(value);
        let String2 = new String("");
        let String3 = new String("");
        let String4 = new String("");
        let temp;
        let i = 0;
        let count = 0;
        for (i = 0; i < String1.length; i++) {
            String2 = new String(parseFloat(String1.charAt(i)));
            if (String1.charAt(i) == ".")
                count++;

            if ((String2.length != 1 && String1.charAt(i) != '.') || count > 1) {
                console.log("You entered an illegal value for the " + label);
                return false;
            }
        }
        return true;
	}
}
export class StorageServive {
    
    private store = {};
    private localStorageSuported = true;
    private testKey = 'butlerLocalStorageTest'; 
    private storage = window.localStorage;
    private cookieEnabled = false;

    constructor() {
        console.log("StorageServices initialized.");
        try {
            this.storage.setItem(this.testKey, '1');
            this.storage.removeItem(this.testKey);
            this.localStorageSuported = true;
            console.log("** Local Storage is supported **");
        } catch (error) {
            //return false;
            this.localStorageSuported = false;
            console.log("** Local Storage is not supported **");
        }
        
        this.cookieEnabled = navigator.cookieEnabled;
        if(this.cookieEnabled){
            console.log("** cookie is enabled **");
        }
        else{
            console.log("** cookie is disabled **");   
        }
    }

    setCookie(cname, cvalue, exdays) {
        let d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
    getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for(let i=0; i<ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1);
          if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return undefined;
    }  
    setItem(key, val){
        if(this.localStorageSuported){
            //localStorage is supported  
            window.localStorage.setItem(key, val); 
        }
        else if(this.cookieEnabled){
            //cookie enabled
            var store_val = val+"<butler-typeof>"+(typeof val);
            this.setCookie(key, store_val, 2);
        }
        else{
            //not supported
            this.store[key] = val;
        }
    }
    getItem(key){
        if(this.localStorageSuported){
            //localStorage is supported
            return window.localStorage.getItem(key);
        }
        else if(this.cookieEnabled){
            //cookie enabled
            let temp: any = this.getCookie(key);
            if (temp){
                temp = temp.split('<butler-typeof>');
                let val = temp[0];
                switch(temp[1]){
                    case 'number':
                        val = Number(val);
                    break;
                    case 'boolean':
                        val = Boolean(val);
                    break;
                    case 'object':
                        val = JSON.parse(val);
                    break;
                }
                return val;
            }
            else
                return temp;
        }
        else{
            //not supported
            return this.store[key];
        }
    }
    removeItem(key){
        if(this.localStorageSuported){
            window.localStorage.removeItem(key);
        }
        else if(this.cookieEnabled){
            //cookie enabled
            document.cookie = key+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"   
        }
        else{
            //not supported
            delete this.store[key]
        }
    }
}
