import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the RestaurantMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurant-menu',
  templateUrl: 'restaurant-menu.html',
})
export class RestaurantMenuPage {

  menu = [{name:'Pizza de calabresa',
  price: 'R$ 34',
  description: 'Calaresa com ....'}]

  constructor(public navCtrl: NavController,
     public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantMenuPage');
  }

  confirmRequest() {
    let alert = this.alertCtrl.create(
      {
        title: 'Pedido realizado com sucesso',
        subTitle: 'Prazo de entrega: 51 min',
        buttons: ['OK']
      }
    );

    alert.present();
  }

}
