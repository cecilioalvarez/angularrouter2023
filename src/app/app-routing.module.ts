import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { C4ParametroComponent } from './c4-parametro/c4-parametro.component';
import { C5Component } from './c5/c5.component';
import { C6selectComponent } from './c6select/c6select.component';
import { C7FacturaComponent } from './c7-factura/c7-factura.component';

const routes: Routes = [
{path:"", redirectTo:"/c6",pathMatch:"full"},
{path:"c1",component:C1Component, pathMatch:"full"},
{path:"c2",component:C2Component, pathMatch:"full"},
{path:"c3",component:C3Component, pathMatch:"full"},
{path:"c4/:numero",component:C4ParametroComponent, pathMatch:"full"},
{path:"c5/:numero/otro/:otro",component:C5Component, pathMatch:"full"},
{path:"c6",component:C6selectComponent, pathMatch:"full"},
{path:"c7Factura/:numero",component:C7FacturaComponent, pathMatch:"full"},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
