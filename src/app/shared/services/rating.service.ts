import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private db : AngularFireDatabase) { }

  save(userId, rating){
    this.db.list('/ratings/' + userId).push(rating);
  }

  get(userId){
    return this.db.object('/ratings/' + userId);
  }

}
