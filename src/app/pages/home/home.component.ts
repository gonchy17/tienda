import { Observable } from 'rxjs';


import { Component, OnInit } from '@angular/core';

import { DishI } from './../../shared/models/dish.interface';
import { DishService } from './dish/dish.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit { 

  public dish$: Observable<DishI[]>;
  
  constructor(private dishSvc: DishService) { }

  ngOnInit() {
    //this.dishSvc.getAllDish().subscribe(res=> console.log('DISH', res));
    this.dish$ = this.dishSvc.getAllDish();
  }

}

/*
* min 12 video 4 c-15-01-21 y seguir trabajando cuando se pueda, no solo se
debe programar, tambien se debe investigar

*crear el proyecto en github c-20-01-21
* Se resolvera para lo ultimo el diseño mobile, tablet y des ser necesario pc, por
ahora concentrarse en la logica
* ahora probar e investigar el error del id que esta comentado en el service c-22-02-21

* investigar como importar un repositorio de github en codesanbox c-24-02-21
* estilos para el final c-28-02-21
* crear la rama firebase en github y agregar hasta aqui,hacer que funcione firebase puesto que se cayo
la señal c-28-02-21
*ya se creo la rama faltante c-06-03-21
*/ 