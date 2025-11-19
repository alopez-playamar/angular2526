import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.html',
  styleUrl: './heroe.css',
  standalone: false
})
export class HeroeComponent implements OnInit {
  public nombre: string = "";
  public edad: number = 0;

  ngOnInit(): void {
    this.restablecerDatos();
  }

  public get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  public getDescriptionHeroe(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  public cambiarNombre() {
    this.nombre = "Vegeta";
    // if (this.nombre == "Son Goku") {
    //   this.nombre = "Vegeta"
    // } else {
    //   this.nombre = "Son Goku"
    // }
  }


  public cambiarEdad() {
    // this.edad += 1;
    this.edad = 50;
  }

  public restablecerDatos() {
    this.edad = 32;
    this.nombre = "Son Goku";
  }
}
