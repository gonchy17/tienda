
import { NgModule } from '@angular/core';


import {MatToolbarModule} from '@angular/material/toolbar';
import{MatSidenavModule} from '@angular/material/sidenav';
import{MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {
    MatProgressSpinnerModule
} from '@angular/material/progress-spinner';
import{MatDividerModule} from '@angular/material/divider';

const myModules = [MatToolbarModule, MatSidenavModule,MatButtonModule,MatMenuModule,
    MatListModule, MatIconModule, MatCardModule, MatProgressSpinnerModule,MatDividerModule];

@NgModule({
    imports: [...myModules],    
    exports: [...myModules]
    
})
export class MaterialModule{}