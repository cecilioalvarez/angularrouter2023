import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c4-parametro',
  templateUrl: './c4-parametro.component.html',
  styleUrls: ['./c4-parametro.component.css']
})
export class C4ParametroComponent {

  //acceso de los parametros que tenemos que vienen de otra parte

  constructor(activeRoute:ActivatedRoute){

    console.log(activeRoute.snapshot.params["numero"])
  }
}
