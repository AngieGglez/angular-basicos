import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  // constructor() {
  //   console.log('Ciclo de vida: constructor');
  //  }

  // ngOnInit(): void {
  //   console.log('Ciclo de vida: OnInit');
  // }

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';

  borrarHeroe() {
    console.log('borrando...');
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
