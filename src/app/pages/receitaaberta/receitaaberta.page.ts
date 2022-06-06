import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Receita } from 'src/app/models/receita';
import { ReceitaCrud } from 'src/app/services/receitacrud.service';


@Component({
  selector: 'app-receitaaberta',
  templateUrl: './receitaaberta.page.html',
  styleUrls: ['./receitaaberta.page.scss'],
})
export class ReceitaabertaPage implements OnInit {

  receita: Observable<Receita[]>;
  receita2: Observable<Receita[]>;

  constructor(private navcrtl: NavController, private receitacrud: ReceitaCrud) { }

  ngOnInit() {
    this.receita = this.selectreceitaid();
    setTimeout(() =>{this.receita2 = this.selectreceita();},2000);
  }

  trocarpage(){
    this.navcrtl.navigateForward('receita');
  }


  buttonon(){
    console.log('id salvo ', this.receitacrud.numeroid);
  }

  selectreceitaid(){
    return this.receitacrud.selectReceitaid();
  }

  selectreceita(){
    console.log('teste');
    return this.receitacrud.selectreceitaidteste(this.receitacrud.numeroid);
  }


}
