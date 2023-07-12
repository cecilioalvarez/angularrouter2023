import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { C4ParametroComponent } from './c4-parametro/c4-parametro.component';
import { C5Component } from './c5/c5.component';
import { C6selectComponent } from './c6select/c6select.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { C7FacturaComponent } from './c7-factura/c7-factura.component';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    C3Component,
    C4ParametroComponent,
    C5Component,
    C6selectComponent,
    C7FacturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
