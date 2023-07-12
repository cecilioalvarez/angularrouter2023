import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-c6select',
  templateUrl: './c6select.component.html',
  styleUrls: ['./c6select.component.css']
})
export class C6selectComponent {

  listaNumeros:Number[]=[1,2,3,4,5];
  numeroSeleccionado?:string;

  mostrarMensaje() {

    alert("hola");
  }
}
