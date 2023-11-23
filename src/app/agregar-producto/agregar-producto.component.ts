import { Component } from '@angular/core';
import { TiendaProductosService } from '../tienda-productos.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {
  nuevoProducto: any = {};

  constructor(private tiendaService: TiendaProductosService) {}

  agregarProducto(): void {
    if(this.nuevoProducto.nombre && this.nuevoProducto.precio){
      this.tiendaService.agregarProducto(this.nuevoProducto.precio, this.nuevoProducto.nombre, this.nuevoProducto.descripcion);
      this.nuevoProducto = {};
    }else{
      alert('No se puede ingresar un producto vacio')
    }
  }
}
