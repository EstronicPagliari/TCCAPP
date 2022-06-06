import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {

  constructor(private navctrl: NavController) { }

  ngOnInit() {
  }


  abrirreceita(){
    this.navctrl.navigateForward('historicoprocesso');
  }
}
