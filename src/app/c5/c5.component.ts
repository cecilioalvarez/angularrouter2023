import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c5',
  templateUrl: './c5.component.html',
  styleUrls: ['./c5.component.css']
})
export class C5Component {



  constructor(activeRoute:ActivatedRoute){
   
    activeRoute.paramMap.subscribe(params=> {
 
         console.log(params.get("numero"));
         console.log(params.get("otro"));
     });
   }
}
