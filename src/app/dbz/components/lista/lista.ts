import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje';
import { v4 as uuid } from 'uuid'

@Component({
  selector: 'dbz-lista',
  templateUrl: './lista.html',
  styleUrl: './lista.css',
  standalone: false
})
export class ListaComponent {

  @Output()
  public onDeletePersonaje: EventEmitter<string> = new EventEmitter();

  @Input()
  public listaPersonajes: Personaje[] = [
    {
      id: uuid(),
      nombre: 'Bulma',
      fuerza: 10
    }
  ]

  deletePersonaje(id: string) {
    this.onDeletePersonaje.emit(id);
  }
}
