import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.html',
  styleUrl: './lista.css',
  standalone: false
})
export class ListaComponent {
  public nombreHeroes: string[] = [
    "Goku",
    "Vegeta",
    "Piccolo",
    "Mutenroshi",
    "Satán",
    "Bulma"
  ];

  public heroeEliminado?: string;

  public eliminarUltimoHeroe() {
    this.heroeEliminado = this.nombreHeroes.pop();
  }
}
