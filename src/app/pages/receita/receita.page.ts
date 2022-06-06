/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl,FormGroup,NgForm } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { Receita } from 'src/app/models/receita';
import { ReceitaCrud } from 'src/app/services/receitacrud.service';
import { map, startWith, tap } from 'rxjs/operators';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { Btcarregar } from 'src/app/models/btcarregar';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.page.html',
  styleUrls: ['./receita.page.scss'],
})
export class ReceitaPage implements OnInit {

  httpOptions: { headers: HttpHeaders } = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  public numeroid: number;
  public idreceita: number;
  receita: Observable<Receita[]>;
  receitaatual: Observable<Receita[]>;
  btcarregar: Observable<Btcarregar[]>;
  constructor(public loadingController: LoadingController,
    private receitacrud: ReceitaCrud,
     private navctrl: NavController,
    public alertController: AlertController,
    private http: HttpClient) { }

  ngOnInit() {
  this.receita = this.selectReceita();
  this.receitaatual = this.receitacarregada();
  }

  selectReceita(): Observable<Receita[]>{
  return this.receitacrud.selectReceita();
   }

   deletereceita(id: number): void {
     console.log('teste', id);
    this.receita = this.receitacrud
    .deletereceita(id)
    .pipe(tap(() => (this.receita = this.selectReceita())));
  }

  btteste(nomereceita: Partial<Receita>): void{
    console.log('funcionando', nomereceita);
  }
  //criarreceita(nomereceita: Partial<Receita>,settempo1: Partial<Receita>): void {
    //this.receita = this.receitacrud.criarreceita(nomereceita.nomereceita, settempo1.settempo1)
    //.pipe(tap(() => (this.receita = this.selectReceita())));
  //}
  abrirreceita(id: number){
    console.log('o id é : ', id);
    this.receitacrud.numeroid = id;
    this.navctrl.navigateForward('receitaaberta');
  }

  criarreceita(){
  this.navctrl.navigateForward('criarreceita');
  }

  async presentAlert(nomereceita: string, id: number) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ATENÇÃO',
      message: 'Deseja carregar a receita : '+nomereceita+'',
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancelar',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Carregar',
          id: 'confirm-button',
          handler: () => {
            this.idreceita = id;
            this.carregarreceita();
            this.presentLoading();
            setTimeout(() => {
              this.receitaatual = this.receitacarregada();
            }, 2000);
            console.log('id carregado', id);
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  //acionar botão carregar receita
  carregarreceita(){
    const url = `https://nodesqlclp.herokuapp.com/receitaid`;
    console.log('id receita teste', this.idreceita);
    const carregar: Btcarregar={
      btcarregar: 1,
      idreceita: this.idreceita
    };
    this.http.put(url, carregar).subscribe(
      resultado => {
        console.log('Botão Acionado');
      });
      //setTimeout(() =>{this.carregarreceitadesacionar();},5000);
 }


 //desacionar botão carregar receita
 carregarreceitadesacionar(){
  const url = `https://nodesqlclp.herokuapp.com/receitaid`;
  const carregar: Btcarregar={
    btcarregar: 0,
    idreceita: this.idreceita
  };
  return this.http.put(url, carregar).subscribe(
    resultado => {
      console.log('Botão Desacionado');
    }
  );
}

//select receita carreagda
receitacarregada(): Observable<Receita[]>{
  return this.receitacrud.selectReceitaCarregada();
}

async presentLoading() {
  const loading = await this.loadingController.create({
    cssClass: 'my-custom-class',
    message: 'Carregando Receita',
    duration: 3000
  });
  await loading.present();

  const { role, data } = await loading.onDidDismiss();
  console.log('Loading dismissed!');
}

async presentAlertPrompt() {

  console.log('testefunctiin');
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Prompt!',
    inputs: [
      {
        name: 'name1',
        type: 'text',
        placeholder: 'Placeholder 1'
      },
      {
        name: 'name2',
        type: 'text',
        id: 'name2-id',
        value: 'hello',
        placeholder: 'Placeholder 2'
      },
      // multiline input.
      {
        name: 'paragraph',
        id: 'paragraph',
        type: 'textarea',
        placeholder: 'Placeholder 3'
      },
      {
        name: 'name3',
        value: '',
        type: 'url',
        placeholder: 'Favorite site ever'
      },
      // input date with min & max
      {
        name: 'name4',
        type: 'date',
        min: '2017-03-01',
        max: '2018-01-12'
      },
      // input date without min nor max
      {
        name: 'name5',
        type: 'date'
      },
      {
        name: 'name6',
        type: 'number',
        min: -5,
        max: 10
      },
      {
        name: 'name7',
        type: 'number'
      },
      {
        name: 'name8',
        type: 'password',
        placeholder: 'Advanced Attributes',
        cssClass: 'specialClass',
        attributes: {
          maxlength: 4,
          inputmode: 'decimal'
        }
      }
    ]
  });
}
}
