import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
  <h3>{{ contador }}</h3>
  <button (click)="incrementarPor()">+1</button>
  <button >-1</button>
  `,
  standalone: false
})

export class ContadorComponent  {
  constructor() { }

      public contador: number = 10;

    incrementarPor(): void {
      this.contador +=1;
    }

}
