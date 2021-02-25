
import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { DishI } from './../../../shared/models/dish.interface';

@Injectable({
  providedIn: 'root'
})
export class DishService {  

  constructor(private afs: AngularFirestore) { }

  getAllDish():Observable<DishI[]>{
    return this.afs.collection('dish')
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map( a=>{
            const data = a.payload.doc.data() as DishI;
            //const id = a.payload.doc.id;
            //return {id, ...data};
            return{...data}
          }))
      );
  }
}
