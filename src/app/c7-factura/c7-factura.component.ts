import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacturasService } from '../facturas.service';
import { Factura } from '../factura';

@Component({
  selector: 'app-c7-factura',
  templateUrl: './c7-factura.component.html',
  styleUrls: ['./c7-factura.component.css']
})
export class C7FacturaComponent {

  facturaSeleccionada?:Factura;
  constructor(activeRoute:ActivatedRoute, facturasService:FacturasService){
   
    activeRoute.paramMap.subscribe(params=> {
 
      var numero:string|null=params.get("numero");

        if (numero) {
          this.facturaSeleccionada=facturasService.buscarFactura(numero);
        }

        
        
     });
   }

}
