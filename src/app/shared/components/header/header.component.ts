import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onToggleSidenav():void{
    this.toggleSidenav.emit();
  }
}

/*
  revisar material para construir las opciones del sidebar c-05-01-21
*/ 
