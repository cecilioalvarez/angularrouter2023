import { Injectable } from '@angular/core';
import { Factura } from './factura';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  listaFacturas:Factura[]=[];
  
  constructor() { 

    this.listaFacturas.push(new Factura("1","ordenador",100));
    this.listaFacturas.push(new Factura("2","tablet",200));
    this.listaFacturas.push(new Factura("3","auricular",50));
    this.listaFacturas.push(new Factura("4","monitor",400));
    this.listaFacturas.push(new Factura("5","disco",100));
    this.listaFacturas.push(new Factura("6","raton",60));
    this.listaFacturas.push(new Factura("7","teclado",20));
    
  }

  buscarFactura(numero:string) {

    return this.listaFacturas.filter((f)=>f.numero==numero)[0];
  }
}
