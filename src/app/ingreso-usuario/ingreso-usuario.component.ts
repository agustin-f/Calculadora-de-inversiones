import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ingresoInversion } from '../ingreso-inversion-model';

@Component({
  selector: 'app-ingreso-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ingreso-usuario.component.html',
  styleUrl: './ingreso-usuario.component.css',
})
export class IngresoUsuarioComponent {
  calcular = output<ingresoInversion>();

  inversionInicialIngresada = signal('0');
  inversionAnualIngresada = signal('0');
  rendimientoEsperadoIngresado = signal('5');
  duracionIngresada = signal('10');

  alEnviar() {
    this.calcular.emit({
      inversionInicial: +this.inversionInicialIngresada(),
      duracion: +this.duracionIngresada(),
      rendimientoEsperado: +this.rendimientoEsperadoIngresado(),
      inversionAnual: +this.inversionAnualIngresada(),
    });
    this.inversionInicialIngresada.set('0');
    this.inversionAnualIngresada.set('0');
    this.rendimientoEsperadoIngresado.set('5');
    this.duracionIngresada.set('10');
  }
}
