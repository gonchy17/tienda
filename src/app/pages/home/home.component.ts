
import { Component, OnInit } from '@angular/core';

import { DishI } from './../../shared/models/dish.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
  constructor() { }

  ngOnInit(): void {
  }

}

/*
* min 12 video 4 c-15-01-21 y seguir trabajando cuando se pueda, no solo se
debe programar, tambien se debe investigar

*crear el proyecto en github c-20-01-21
* Se resolvera para lo ultimo el diseño mobile, tablet y des ser necesario pc, por
ahora concentrarse en la logica
* tambien investigar si se usara firebase u otro c-24-01-21
*/ 