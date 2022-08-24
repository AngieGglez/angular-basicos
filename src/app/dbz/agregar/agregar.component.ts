import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzModule } from '../dbz.module';
import { DbzService } from '../servicios/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent{

  //Creación de objeto
  @Input () nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  cambiarNombre (event: any ){
    console.log(event.target.value);
  }
  constructor (private dbzService:DbzService){}

  // @Output () onNuevoPersonaje: EventEmitter <Personaje>= new EventEmitter();

  agregar ( ){
    // event.PreventDefault(); //Prevee el comportamiento por defecto que tiene un formulario
    if(this.nuevo.nombre.trim().length === 0) { return; }
    console.log(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
