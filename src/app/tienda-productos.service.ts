import { Injectable } from '@angular/core';

export class Producto {
  constructor(public precio: number, public nombre: string, public descripcion: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class TiendaProductosService {
  private productos: Producto[] = [];

  obtenerProductos(): Producto[] {
    return this.productos;
  }

  agregarProducto(precio: number, nombre: string, descripcion: string): void {
    const nuevoProducto = new Producto(precio, nombre,descripcion);
    this.productos.push(nuevoProducto);
  }
}
