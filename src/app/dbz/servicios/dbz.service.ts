import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable() 
export class DbzService {
    
    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        },
      ];
      
    get personajes (): Personaje[] {
        //Separa los elementos independientes del array y crea uno nuevo, rompe el envio por referencia
        return [...this._personajes];
    }

    constructor(){}

    agregarPersonaje( personaje: Personaje ){
        this._personajes.push(personaje);
    }

}