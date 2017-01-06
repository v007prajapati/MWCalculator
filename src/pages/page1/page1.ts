import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AppService, StorageServive } from '../../lib/app.service';
import { WebService } from '../../lib/web.service';
import { Broadcaster } from '../../lib/event.service';

@Component({//this is deorator, used to associate metadeta with component class
  selector: 'page-page1', //this can be used as an HTML injecting
  templateUrl: 'page1.html',
  providers: [AppService, StorageServive, WebService],
  // directives: [HistoryViewer]
})
export class Page1 {//The export specifies that, this component will be available outside the file.
	//http://www.engineeringcivil.com/weight-calculator.html
	product_list: Array<{text: string, value:any, checked: boolean}> = [];
	
	product: any;
    product_val: any;
	shape: null;
    public maxRecord = 5;
	public shape_list = [
		{text: 'Round', value: 'round', checked: true},
		{text: 'Square', value: 'square', checked: false},
		{text: 'Rectangle', value: 'rectangle', checked: false},
		{text: 'Hexagonal', value: 'hexagonal', checked: false},
		{text: 'Octagonal', value: 'octagonal', checked: false},
		{text: 'Sheet', value: 'sheet', checked: false},
		{text: 'Plate', value: 'plate', checked: false},
		{text: 'Tubular', value: 'tubular', checked: false},
		{text: 'Ring', value: 'ring', checked: false},
		{text: 'Pipe', value: 'pipe', checked: false},
	];
	public unit_list = [
		{text: 'in', value: 'in', checked: true},
		{text: 'ft', value: 'ft', checked: false},
		{text: 'yd', value: 'yd', checked: false},
		{text: 'mm', value: 'mm', checked: false},
		{text: 'cm', value: 'cm', checked: false},
		{text: 'm', value: 'm', checked: false}
	];

	public lbl1 = null; 
	public lbl2 = null;
	public lbl3 = null;

	public unit1 = null; 
	public unit2 = null;
	public unit3 = null;

	public result2 = null;

	public param1 = 0; 
	public param2 = 0;
	public param3 = 0;
	public param4 = 1;

	constructor(public navCtrl: NavController, private appService: AppService, private storageService: StorageServive, private broadcaster: Broadcaster, private webService: WebService) {
		// this.product_list.push({text: 'Steel', value: 1, checked: true});
		// this.product_list.push({text: 'Aluminum 1100', value: 0.3462, checked: false});
		this.product_list = [
			{text: 'Mild Steel (MS)', value: "1.0002<>Mild Steel (MS)", checked: false},
			{text: 'Steel', value: "1<>Steel", checked: false},
			{text:"Aluminum 1100", value: "0.3462<>Aluminum 1100", checked: false},
            {text:"Aluminum 2011", value: "0.3604<>Aluminum 2011", checked: false},
            {text:"Aluminum 2014", value: "0.3568<>Aluminum 2014", checked: false},
            {text:"Aluminum 2017", value: "0.3568<>Aluminum 2017", checked: false},
            {text:"Aluminum 2024", value: "0.3533<>Aluminum 2024", checked: false},
            {text:"Aluminum 3003", value: "0.3498<>Aluminum 3003", checked: false},
            {text:"Aluminum 5005", value: "0.3462<>Aluminum 5005", checked: false},
            {text:"Aluminum 5052", value: "0.3427<>Aluminum 5052", checked: false},
            {text:"Aluminum 5056", value: "0.3356<>Aluminum 5056", checked: false},
            {text:"Aluminum 5083", value: "0.3392<>Aluminum 5083", checked: false},
            {text:"Aluminum 5086", value: "0.3392<>Aluminum 5086", checked: false},
            {text:"Aluminum 6061", value: "0.3462<>Aluminum 6061", checked: false},
            {text:"Aluminum 6063", value: "0.3462<>Aluminum 6063", checked: false},
            {text:"Aluminum 7050", value: "0.3568<>Aluminum 7050", checked: false},
            {text:"Aluminum 7075", value: "0.3568<>Aluminum 7075", checked: false},
            {text:"Aluminum 7178", value: "0.3604<>Aluminum 7178", checked: false},
			{text:"Stainless 300 Series", value: "1.030<>Stainless 300 Series", checked: false},
			{text:"Stainless 400 Series", value: "1.010<>Stainless 400 Series", checked: false},
			{text:"Nickel 200", value: "1.132<>Nickel 200", checked: false},
			{text:"Nickel 400", value: "1.125<>Nickel 400", checked: true},
			{text:"Nickel R-405", value: "1.121<>Nickel R-405", checked: true},
			{text:"Nickel K-500", value: "1.075<>Nickel K-500", checked: true},
			{text:"Nickel 600", value: "1.072<>Nickel 600", checked: true},
			{text:"Nickel 625", value: "1.075<>Nickel 625", checked: true},
			{text:"Nickel 800H", value: "1.012<>Nickel 800H", checked: true},
			{text:"Nickel 800AT", value: "1.012<>Nickel 800AT", checked: true},
			{text:"Nickel 825", value: "1.037<>Nickel 825", checked: true},
			{text:"Nickel 330", value: "1.012<>Nickel 330", checked: true},
			{text:"Nickel 20", value: "1.030<>Nickel 20", checked: true},
			{text:"Nickel C-276", value: "1.132<>Nickel C-276", checked: true},
			{text:"Nickel 2545MD", value: "1.012<>Nickel 2545MD", checked: true},
			{text:"Magnesium", value: "0.229<>Magnesium", checked: true},
			{text:"Beryllium", value: "0.236<>Beryllium", checked: true},
			{text:"Titanium", value: "0.575<>Titanium", checked: true},
			{text:"Zirconium", value: "0.812<>Zirconium", checked: true},
			{text:"Cast Iron", value: "0.911<>Cast Iron", checked: true},
			{text:"Zinc", value: "0.911<>Zinc", checked: true},
			{text:"Brass", value: "1.084<>Brass", checked: true},
			{text: "Columbium", value: "1.095<>Columbium", checked: true},
			{text:"Copper", value: "1.144<>Copper", checked: true},
			{text:"Molybdenum", value: "1.303<>Molybdenum", checked: true},
			{text:"Silver", value: "1.339<>Silver", checked: true},
			{text:"Lead", value: "1.448<>Lead", checked: true},
			{text:"Tantalum", value: "2.120<>Tantalum", checked: false},
			{text:"Tungsten", value: "2.462<>Tungsten", checked: false},
			{text:"Gold", value: "2.466<>Gold", checked: false}
		];

		this.unit1 = this.unit2 = this.unit3 = "mm";

        this.webService.getConfig()
        .subscribe(
            // comments => this.comments = comments, //Bind to view
            comments => {
                console.log("comments: ", comments)
            }, //Bind to view
            err => {
                // Log errors if any
                console.log(err);
            }
        );
        // this.webService.getCon();
	}

	ChangeLabel() {
        let formType = this.shape;

        if (formType == "round") {
            this.lbl1 = "Diameter";
            this.lbl2 = null;
            this.lbl3 = "Length";
        }
        if (formType == "square") {
            this.lbl1 = "Width";
            this.lbl2 = null;
            this.lbl3 = "Length";
        }
        if (formType == "hexagonal") {
            this.lbl1 = "Diameter";
            this.lbl2 = null;
            this.lbl3 = "Length";
        }
        if (formType == "octagonal") {
            this.lbl1 = "Diameter";
            this.lbl2 = null;
            this.lbl3 = "Length";
        }
        if (formType == "flat" || formType == "sheet" || formType == "plate" || formType == "coil" || formType == "rectangle") {
            this.lbl1 = "Thickness";
            this.lbl2 = "Width";
            this.lbl3 = "Length";
        }
        if (formType == "tubular" || formType == "pipe") {
            this.lbl1 = "Outer Diameter";
            this.lbl2 = "Wall";
            this.lbl3 = "Length";
        }
        if (formType == "circular") {
            this.lbl1 = "Diameter";
            this.lbl2 = null;
            this.lbl3 = "Thickness";
        }
        if (formType == "ring") {
            this.lbl1 = "Outer Diameter";
            this.lbl2 = "Inner Diameter";
            this.lbl3 = "Thickness";
        }
    }

	productChanged(){
		console.log("productChanged", this.product);
        this.product_val = Number(this.product.split("<>")[0]);
        console.log("product_val: ",this.product_val);
		// console.log("productChanged", this.appService.UnitConvertI("cm", 90));
		// console.log("productChanged", this.appService.CheckNum("cm", "Test1"));
		// console.log("productChanged", this.appService.CheckNum(200, "Test2"));
	}

	shapeChanged(){
		console.log("shapeChanged", this.shape);
		this.ChangeLabel();
	}

    emitStringBroadcast() {
        this.broadcaster.broadcast('MyEvent', 'some message');
    }

	calculateWeight(){
		console.log("calculateWeight");
		let FormType = this.shape;
		let Result = null;
		let Convert = this.product_val;
		let RoundOff = 5;

		let param1 = this.appService.UnitConvertI(this.param1, this.unit1);
        let param2 = this.appService.UnitConvertI(this.param2, this.unit2);
        let param3 = this.appService.UnitConvertF(this.param3, this.unit3);
        let param4 = this.param4;

		if (FormType == "round") {
            Result = new String(2.6729 * param1 * param1 * Convert * param3 * param4);
            // document.forms[0].result.value = Result.substring(0, Result.indexOf(".") + RoundOff);
            this.result2 = Result.substring(0, Result.indexOf(".") + RoundOff) * 0.4535;

        }
        if (FormType == "square") {
        	console.log("param1: ", param1, "this.param3: ", param3, "this.param4: ", param4, "Convert: ",Convert);
            Result = new String(3.4032 * param1 * param1 * Convert * param3 * param4);
            // document.forms[0].result.value = Result.substring(0, Result.indexOf(".") + RoundOff);
            this.result2 = Result.substring(0, Result.indexOf(".") + RoundOff) * 0.4535;

            let t1 = 3.4032 * param1 * param1 * Convert * param3 * param4;
            let t2 = t1 * 0.4535;
            console.log("t1: ",t1," t2: ",t2);
        }
        if (FormType == "hexagonal") {
            Result = new String(2.9473 * param1 * param1 * Convert * param3 * param4);
            // document.forms[0].result.value = Result.substring(0, Result.indexOf(".") + RoundOff);
            this.result2 = Result.substring(0, Result.indexOf(".") + RoundOff) * 0.4535;
        }
        if (FormType == "octagonal") {
            Result = new String(2.8193 * param1 * param1 * Convert * param3 * param4);
            // document.forms[0].result.value = Result.substring(0, Result.indexOf(".") + RoundOff);
            this.result2 = Result.substring(0, Result.indexOf(".") + RoundOff) * 0.4535;
        }
        if (FormType == "flat" || FormType == "sheet" || FormType == "plate" || FormType == "coil" || FormType == "rectangle") {
        	console.log("calculation for plate");
            Result = new String(3.4032 * param1 * Convert * param2 * param3 * param4);
            // document.forms[0].result.value = Result.substring(0, Result.indexOf(".") + RoundOff);
            this.result2 = Result.substring(0, Result.indexOf(".") + RoundOff) * 0.4535;
        }
        if (FormType == "tubular" || FormType == "pipe") {
            Result = 10.68 * (param1 - param2) * Convert * param2 * param3 * param4;
            if (Result < 0)
                alert("The Width of the Tube Wall cannot exceed the Outer Diameter!");
            else {
                Result = new String(Result);
                // document.forms[0].result.value = Result.substring(0, Result.indexOf(".") + RoundOff);
                this.result2 = Result.substring(0, Result.indexOf(".") + RoundOff) * 0.4535;
            }
        }
        if (FormType == "circular") {
            param3 = this.appService.UnitConvertI(param3, "ft");
            Result = new String(0.22274 * param1 * Convert * param1 * param3 * param4);
            // document.forms[0].result.value = Result.substring(0, Result.indexOf(".") + RoundOff);
            this.result2 = Result.substring(0, Result.indexOf(".") + RoundOff) * 0.4535;
        }
        if (FormType == "ring") {
            param3 = this.appService.UnitConvertI(param3, "ft");
            Result = (0.22274 * param3 * ((param1 * param1) - (param2 * param2)) * Convert * param4);
            if (Result < 0)
                alert("The Inner Diameter cannot exceed the Outer Diameter!");
            else {
                Result = new String(Result);
                // document.forms[0].result.value = Result.substring(0, Result.indexOf(".") + RoundOff);
                this.result2 = Result.substring(0, Result.indexOf(".") + RoundOff) * 0.4535;
            }
        }

        if(this.result2){
        	try{
        		let historyData: any = this.storageService.getItem("HistoryData");
                let tempSelProdArr = this.product.split("<>");
        		if(historyData){
        			historyData = JSON.parse(historyData);

                    let obj = {
                        product_name: tempSelProdArr[1],
                        product_val: tempSelProdArr[0],
                        
                        lbl1: this.lbl1,
                        lbl2: this.lbl2,
                        lbl3: this.lbl3,
                        
                        param1: this.param1,
                        param2: this.param2,
                        param3: this.param3,
                        param4: this.param4,

                        unit1: this.unit1,
                        unit2: this.unit2,
                        unit3: this.unit3,

                        result2: this.result2,
                        date: new Date()
                    };

                    historyData.push(obj);
                    this.storageService.setItem("HistoryData", JSON.stringify(historyData));
                    this.emitStringBroadcast();//emit event to reload history view
        		}
        		else{
        			historyData = [{
                        product_name: tempSelProdArr[1],
                        product_val: tempSelProdArr[0],

        				lbl1: this.lbl1,
        				lbl2: this.lbl2,
        				lbl3: this.lbl3,
        				
        				param1: this.param1,
        				param2: this.param2,
        				param3: this.param3,
        				param4: this.param4,

        				unit1: this.unit1,
        				unit2: this.unit2,
        				unit3: this.unit3,

        				result2: this.result2,
        				date: new Date()
        			}];

        			this.storageService.setItem("HistoryData", JSON.stringify(historyData));
                    this.emitStringBroadcast();//emit event to reload history view
        		}
        	}
        	catch(e){
        		console.log("Exception : ",e);
        	}
        }
	}
}
