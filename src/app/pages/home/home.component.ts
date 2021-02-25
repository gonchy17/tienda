

import { Component, OnInit } from '@angular/core';

import { DishI } from './../../shared/models/dish.interface';
import { DishService } from './dish/dish.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public dish:{
    id:string;
    titleDish:string;
    contentDish:string;
    imageDish:string;
  }
  /*public dish:{
    id:string;
    titleDish:string;
    contentDish:string;
    imageDish:string;
  }[]=[
    {
      id:'1',
      titleDish:'Pique',
      contentDish:`lorem ipsum`,
      imageDish:'https://img-global.cpcdn.com/recipes/caef4bfd1a0dbdcd/751x532cq70/pique-macho-cochabambino-foto-principal.webp'
    },
    {
      id:'2',
      titleDish:'Planchita',
      contentDish:`lorem ipsum`,
      imageDish:'https://img-global.cpcdn.com/recipes/caef4bfd1a0dbdcd/751x532cq70/pique-macho-cochabambino-foto-principal.webp'
    }
  ];
  */
  constructor(private dishSvc: DishService) { }

  ngOnInit() {
    this.dishSvc.getAllDish().subscribe(res=> console.log('DISH', res));
  }

}

/*
* min 12 video 4 c-15-01-21 y seguir trabajando cuando se pueda, no solo se
debe programar, tambien se debe investigar

*crear el proyecto en github c-20-01-21
* Se resolvera para lo ultimo el diseño mobile, tablet y des ser necesario pc, por
ahora concentrarse en la logica
* ahora probar e investigar el error del id que esta comentado en el service c-22-02-21
Por ahora no se puede hacer correr, si no se pudiera nuevamente, entonces ver el video de dominicode
c-24-02-21
*/ 