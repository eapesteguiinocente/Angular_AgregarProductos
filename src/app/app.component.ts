import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examen';
  selectedCategory = 'comida';
  monto: number = 0;
  gastos: { [key: string]: number } = {
    comida: 0,
    estudios: 0,
    transporte: 0,
    ocio: 0
  };
  totalGastos = 0;
  consejos = [
    'Ahorra al menos el 20% de tus ingresos.',
    'Evita gastos innecesarios.',
    'Crea un presupuesto mensual y síguelo.'
  ];

  agregarGasto() {
    
    this.gastos[this.selectedCategory] += this.monto;
    this.totalGastos = this.gastos['comida'] + this.gastos['estudios'] + this.gastos['transporte'] + this.gastos['ocio'];
    alert(this.totalGastos)
  }

  ngOnInit() {
  }
}
