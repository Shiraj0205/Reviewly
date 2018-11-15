import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RatingService } from 'shared/services/rating.service';
import { AppUser } from 'shared/models/app-user';
import { AuthService } from 'shared/services/auth.service';
import * as _ from 'lodash';
import { Rating } from 'shared/models/rating';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() rating: number;
  @Input() itemId: string;

  constructor(private auth : AuthService, private ratingService : RatingService){

  }


  appUser : AppUser;
  ratingObj = { productId : '', rating : 0};
  userRatings;
  inputName: string;
  

  ngOnInit() {
    this.inputName = this.itemId + '_rating';
  }

  onClick(rating: number): void {
    this.rating = rating;
    this.ratingObj.rating = rating;
    this.ratingObj.productId = this.itemId;
    this.ratingService.save(this.appUser.id, this.ratingObj);
    }
}