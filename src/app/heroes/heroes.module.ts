import { NgModule } from '@angular/core';
import { HeroeComponent } from './components/heroe/heroe';
import { ListaComponent } from './components/lista/lista';
// import { CommonModule } from '@angular/common';


@NgModule({
  // imports: [CommonModule],
  exports: [HeroeComponent, ListaComponent],
  declarations: [HeroeComponent, ListaComponent],
})
export class HeroesModule { }
