import { Component, OnInit } from '@angular/core';
import { TiendaProductosService } from '../tienda-productos.service'; 

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  listaProductos: any[] = []; 

  constructor(private tiendaService: TiendaProductosService) {} 

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.listaProductos = this.tiendaService.obtenerProductos();
  }
}
