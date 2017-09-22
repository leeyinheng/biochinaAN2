import { Component, OnInit } from "@angular/core"; 
import {weight} from "./Weight"


@Component({
    moduleId: module.id,
    templateUrl:'stoneweight.component.html', 
    styleUrls:['stoneweight.component.css']
})


export class StoneweightComponent implements OnInit{
    
    ngOnInit(): void {
        console.log('stoneweight oninit');
    }

    constructor(){

    }

    _airweight : number; 

    get airweight(): number {
        
        return this._airweight; 
    }

    set airweight(value:number) {
        
        this._airweight = value; 

        this.caculateweightrate; 

    }

    _waterweight : number; 

    get waterweight():number{
        return this._waterweight; 
    }

    set waterweight(value:number){

        this._waterweight = value;
        
        this.caculateweightrate; 
    }

    ratioweight: string = '尚未有數值'; 
    
    caculateweightrate() : string {

        if ( typeof this.waterweight !== 'undefined' && this.waterweight !== 0 && this.airweight !== 0)
        {
           var diffweight  = (this.airweight - this.waterweight); 

           this.ratioweight =  (this.airweight/ diffweight).toFixed(2); 

        }

        return this.ratioweight; 
        
    }

    _weightList : weight[]; 

    get weightList() : weight[]{

        return this._weightList; 
    }

    set weightList( value :weight[] ) {

        this._weightList = value; 

    }

    addintolist(){

        if (this.ratioweight !== '尚未有數值')
        {
              
             var index : number = 0; 

             index = 1              

             let newitem = new weight(index, this.airweight, this.waterweight, this.ratioweight);  

             if (typeof this.weightList !== 'undefined' && this.weightList.length > 0)
             {
                            var list : weight[] = this.weightList; 

                            var count : number = this.weightList.length; 

                            newitem.id = count + 1; 
                
                             list.push(newitem); 
                
                             this.weightList = list; 
             }
             else 
             {
                            var list: weight[] = []; 
                
                             list.push(newitem); 
                
                             this.weightList = list; 

             }

             this.waterweight = 0; 

             this.airweight = 0; 

             this.ratioweight = '尚未有數值'; 
            
             
        }


    }

}