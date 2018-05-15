import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Instagram } from '@ionic-native/instagram';

/**
 * Generated class for the RequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-requests',
  templateUrl: 'requests.html',
})
export class RequestsPage {

  isSharEnabled = false;

  requests = [{
    name: 'Pizza',
    date: '15 de maio de 2018',
    description: 'Calabresa'
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private instagram: Instagram) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestsPage');

    this.instagram.isInstalled().then((result) => {
      this.isSharEnabled = result === 'true';
      console.log('botão de compartilhar habilitado');
    }).catch(() => {
      console.log('instagram não instalado');
      this.isSharEnabled = false;
    });
  }

  shareOnIstagram() {
    this.instagram.share('data:image/jpg;../../assets/imgs/img_pizza_calabresa.jpg', 'Meu Pedido')
    .then(() => console.log('Compartilhado!'))
    .catch((error: any) => console.error(error));
  }

}
