import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DBZService {
  constructor() { }

  public personajes: Personaje[] = [
    {
      id: uuid(),
      nombre: 'Goku',
      fuerza: 1000
    },
    {
      id: uuid(),
      nombre: 'Trunks',
      fuerza: 500
    },
    {
      id: uuid(),
      nombre: 'Mutenroshi',
      fuerza: 100
    },
    {
      id: uuid(),
      nombre: 'Krilim',
      fuerza: 300
    },
    {
      id: uuid(),
      nombre: 'Tenshian',
      fuerza: 350
    },
    {
      id: uuid(),
      nombre: 'Bu',
      fuerza: 10000
    },
    {
      id: uuid(),
      nombre: 'Vegeta',
      fuerza: 800
    }
  ];

  public addPersonaje(personaje: Personaje) {
    personaje.id = uuid();
    this.personajes.push(personaje);
  }

  public deletePersonajeById(id: string) {
    this.personajes = this.personajes.filter(personaje => personaje.id !== id);
    console.log('ID Personaje eliminado:' +  id);
  }
}
