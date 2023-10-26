import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  personas = [
    { nombre: 'Edlu', edad: 28 },
    { nombre: 'Diana', edad: 31 },
    { nombre: 'Santiago', edad: 18 },
    { nombre: 'Fabricio', edad: 30 },
    { nombre: 'Mauricio', edad: 13 },
    { nombre: 'Martin', edad: 28 },
    { nombre: 'Luchy', edad: 15 },
    { nombre: 'Sebas', edad: 21 },
    { nombre: 'Fio', edad: 30 },
    { nombre: 'Ariana', edad: 5 }
  ];

  getClass(edad:number) {
    if (edad < 18) {
      return 'menor-edad';
    }else if(edad >= 18 && edad <= 30 ){
      return 'adulto-joven';
    }else{
      return 'adulto';
    }
  }

}
