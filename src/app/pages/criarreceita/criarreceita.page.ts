import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { receitateste } from 'src/app/models/receita';
import { ReceitaCrud } from 'src/app/services/receitacrud.service';

@Component({
  selector: 'app-criarreceita',
  templateUrl: './criarreceita.page.html',
  styleUrls: ['./criarreceita.page.scss'],
})
export class CriarreceitaPage implements OnInit {

  nomereceita = '';

  constructor(private navcrtl: NavController, private receitacrud: ReceitaCrud) { }

  ngOnInit() {
  }

  trocarpage(){
    this.navcrtl.navigateForward('receita');
  }

  clickme() {
    console.log('it does nothing',this.nomereceita);

    const receita: receitateste={
      nomereceita: this.nomereceita,
    };
    this.receitacrud.criarreceita(receita);
  }


}
