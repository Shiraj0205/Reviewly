import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private db : AngularFireDatabase) { }

  save(userId, rating){
    this.db.list('/ratings/' + userId).push(rating);
  }

  get(userId, productId){
    var collname = "/ratings/" + userId;
    return this.db.list(collname, ref => ref.orderByChild('productId').equalTo(productId)).valueChanges();
  }

}
