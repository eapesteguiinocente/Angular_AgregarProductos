import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {
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
  }

  ngOnInit() {
  }
}