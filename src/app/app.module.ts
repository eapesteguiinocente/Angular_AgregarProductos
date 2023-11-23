import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { TiendaProductosService } from './tienda-productos.service'; // Importa el servicio


import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    AgregarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TiendaProductosService],
  bootstrap: [AppComponent, 
    ListaProductosComponent, 
    AgregarProductoComponent]
})
export class AppModule { }
