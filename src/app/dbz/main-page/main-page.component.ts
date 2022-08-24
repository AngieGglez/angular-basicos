import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../servicios/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  // personajes: Personaje [] = [];
  nuevo: Personaje = {
      nombre: 'Maestro Roshi',
      poder: 1000
    };

    // get personajes (): Personaje [] {
    //   return this.dbzService.personajes;;
    // }

    // agregarNuevoPersonaje(argumento: Personaje){
    //   // debugger;
    //   console.log(argumento);
    //   // this.personajes = this.dbzService.personajes;
      
    // }

    //INYECCIÓN DE DEPENDENCIAS: Definicion de una propiedad en la declaración
    // constructor( private dbzService : DbzService) {
    // }
    constructor(){}

}
