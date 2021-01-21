
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
*Copiar una url de una imagen para probar, a lo mejor se arregla,
seguir trabajando 
*/ 