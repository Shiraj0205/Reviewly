import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { RatingService } from 'shared/services/rating.service';
import { AuthService } from 'shared/services/auth.service';
import { AppUser } from 'shared/models/app-user';
import { Rating } from 'shared/models/rating';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input('product') product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart : ShoppingCart;
   
  appUser : AppUser;
  rating = 0;

  constructor(private cartService : ShoppingCartService, 
    private ratingService : RatingService,
    private auth : AuthService) { 
  }

  

  
  ngOnInit() {
    this.auth.appUser$.subscribe(appUser => { 
      this.appUser = appUser;
      this.ratingService.get(this.appUser.id, this.product.id).subscribe(
        r => {
          var tt = r[0] as Rating;
          console.log(tt.rating);
          this.rating = tt.rating;
        }
      );
  });
}
}
