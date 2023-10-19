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
  consejosClave = [
    'Evita las compras por impulso. ¡No seas impulsivo!',
    'Detalla todos tus gastos mensuales. ¡Que no se te escape nada!',
    'Evita los llamados gastos hormiga. ¡No necesitas Spotify para vivir!'
  ];
  mensajesMotivacionales = [
    '¡Cada dia el sueño del departamento esta más cerca!',
    'Ya lo dijo Julio Velarde: ¡Ahorro es progreso!',
    '¡El que la sigue, la consige!'
  ];

  agregarGasto() {
    if (this.monto <= 0) {
      alert('¡Profe! ¡Eso no se hace! No se debe ingresar S/0 o negativo');
    } else {
      this.gastos[this.selectedCategory] += this.monto;
      this.totalGastos = this.gastos['comida'] + this.gastos['estudios'] + this.gastos['transporte'] + this.gastos['ocio'];
      alert('Se ha registrado el nuevo gasto en la categoría: ' + this.selectedCategory );
    }   
  }
}
