import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from "ionic-angular";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadignCtrl: LoadingController) {

  }

  carregandoLogin(){
    this.loadignCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

  cadastrar(){
    this.navCtrl.push("TelaCadastroPage")
  }

}
