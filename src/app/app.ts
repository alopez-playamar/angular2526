import { Component, signal } from '@angular/core';

import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [ContadorModule, HeroesModule]
})
export class App {
    protected readonly title = signal('02-bases-angular jajajajaj');
    title2 = "Mi primera aplicación de Angular";
    public contador: number = 10;

    incrementarPor(): void {
      this.contador +=1;
    }
}
