import { RestaurantMenuPage } from './../restaurant-menu/restaurant-menu';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  restaurants = [{
    name: 'Spoleto',
    type: 'Pizzaria',
    distance: '5,7 km'
  },
  {
    name: 'Açai Gold',
    type: 'Sorveteria',
    distance: '2,7 km'
  },
  {
    name: 'Sapore',
    type: 'Pizzaria',
    distance: '5,7 km'
  }];

  doRefresh(refresher) {
    setTimeout(() => {
      
      let toast = this.toastCtr.create({
        message: "lista de restaurantes atualizada",
        duration: 3000
      });

      toast.present();

      refresher.complete();
    }, 2000);
  }

  constructor(public navCtrl: NavController, public toastCtr: ToastController) {

  }

  goToRestaurantView() {
    this.navCtrl.push(RestaurantMenuPage);
  }

}
