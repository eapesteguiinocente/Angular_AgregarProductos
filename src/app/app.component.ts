import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paises = [
    {
      "nombre": "Brasil",
      "colores_bandera": ["yellow", "green"]
    },
    {
      "nombre": "India",
      "colores_bandera": ["white", "orange"]
    },
    {
      "nombre": "China",
      "colores_bandera": ["yellow", "red"]
    },
    {
      "nombre": "Canadá",
      "colores_bandera": ["white", "red"]
    },
    {
      "nombre": "Australia",
      "colores_bandera": ["white", "blue"]
    },
    {
      "nombre": "Japón",
      "colores_bandera": ["red", "white"]
    },
    {
      "nombre": "Suecia",
      "colores_bandera": ["yellow", "blue"]
    },
    {
      "nombre": "Finlandia",
      "colores_bandera": ["blue", "white"]
    },
    {
      "nombre": "Noruega",
      "colores_bandera": ["blue", "red"]
    },
    {
      "nombre": "Turquía",
      "colores_bandera": ["white", "red"]
    }
  ]

  getStyle(pais: string[]) {
    return { "color": pais[0], "background-color": pais[1] }
  }
}
