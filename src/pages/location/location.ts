import { Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import { Geolocation} from '@ionic-native/geolocation';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

  restaurants = [{
    name: 'One Burg',
    type: 'Pizzaria',
    distance: '5,7 km'
  },
  {
    name: 'Mega Açai',
    type: 'Sorveteria',
    distance: '2,7 km'
  },
  {
    name: 'Sapore',
    type: 'Pizzaria',
    distance: '5,7 km'
  }];

  isLoading = true;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private geolocation: Geolocation,
    public loadingCtrl: LoadingController) {

  }

  presentLoading() {

    let loader = this.loadingCtrl.create({
      content: "Carregando..."
    });

    loader.present().then(() => {
      
      this.geolocation.getCurrentPosition().then((resp) => {
        console.log(resp);
        loader.dismiss();
        this.isLoading = false;
      
      }).catch((error) => {
        loader.dismiss();
        console.log('Error getting location', error);
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
    this.presentLoading();
  }

}
