import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //visible fuera de este modulo
    exports: [
        ListadoComponent
    ],
    //modulos
    imports: [
        CommonModule
    ]

})
export class Heroesmodule {}