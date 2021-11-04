import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeEliminado: string = '';
  heroesEliminados: string[] = [];

  borrarHeroes() :void {
    this.heroeEliminado = this.heroes.shift() || '';
    // if(this.heroeEliminado)
    //   this.heroesEliminados.push(this.heroeEliminado);
  }

}
