import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../servicios/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent{
  // @Input() data: Personaje [] = [];
  get personajes () {
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService){}
}
