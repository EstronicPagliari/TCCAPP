import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-historicoprocesso',
  templateUrl: './historicoprocesso.page.html',
  styleUrls: ['./historicoprocesso.page.scss'],
})
export class HistoricoprocessoPage implements OnInit {

  constructor(private navctrl: NavController) { }

  ngOnInit() {
  }

  trocarpage(){
    this.navctrl.navigateForward('historico');
  }

}
