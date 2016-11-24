import {Injectable} from '@angular/core'; 
import {Http, Response} from '@angular/http'; 
import {Headers, RequestOptions} from '@angular/http'; 
import {URLSearchParams} from '@angular/http'; 
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmailService{
    
    constructor(private http:Http){}

    sendemail(to:string,subject:string,message:string)
    {
            var web = 'http://leecloud.azurewebsites.net/api/'; 

            //var web = 'http://localhost:49740/api/Email';

            var from = "bio.china@msa.hinet.net"; 

            var webkey = 'adsfasd3w243l2q51230-48-gfd321qm4mndvdcuoisadjq2w3;4;lr8'; 
            
            var url = "Email?from=" + from + "&to=" + to + "&subject=" + encodeURIComponent(subject) + "&message=" + encodeURIComponent(message) + "&webkey=" + webkey; 

            var urlstring = web + url; 


            //let body = JSON.stringify({ "from":from,"to":to,"subject":encodeURIComponent(subject),"message":encodeURIComponent(message),"webkey":webkey });

             let urlSearchParams = new URLSearchParams();
             urlSearchParams.append('from', from);
             urlSearchParams.append('to', to);
             urlSearchParams.append('subject', encodeURIComponent(subject));
             urlSearchParams.append('message', encodeURIComponent(message));
             urlSearchParams.append('webkey', webkey);
             let body2 = urlSearchParams.toString()

            let headers = new Headers({ 'Content-Type': 'text/plain'});
          
            let options = new RequestOptions({ headers: headers});
           
            return this.http.get(urlstring,options)
                   .map(this.extractData) 
                   .catch(this.handleError); 

           
            
    }

      private extractData(res: Response) {
        let body = res.json();
         return body.data || { };
        }


      private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
     }
}
