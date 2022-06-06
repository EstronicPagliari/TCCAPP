/* eslint-disable @typescript-eslint/member-ordering */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Motor } from 'src/app/models/Auto';
import { BuscarPosicao, Etapaatual, Forno, Posicao } from 'src/app/models/Forno';
import { FornoCrud } from 'src/app/services/fornocrud.service';
import { GroceryListCrudService } from 'src/app/services/grocery-list-crud.service';


@Component({
  selector: 'app-forno',
  templateUrl: './forno.page.html',
  styleUrls: ['./forno.page.scss'],
})
export class FornoPage implements OnInit {

  constructor(private fornocrud: FornoCrud,private http: HttpClient,
    public loadingController: LoadingController,
    private groceryListCrudService: GroceryListCrudService,
    private posicao: FornoCrud,
    public alertController: AlertController) { }

  text: number;
  motor$: Observable<Motor[]>;
  ligar: number;
  forno: Observable<Forno[]>;
  etapas: Observable<Etapaatual[]>;
  etapas1: Observable<Etapaatual[]>;

  buscarPosi: Observable<BuscarPosicao[]>;

  posicaoatual: Observable<Posicao[]>;
  ngOnInit() {
   this.motor$ = this.selectTbMotor();
   this.forno = this.selectretornoligado();
   this.etapas = this.selectetapaatual();
   this.etapas1 = this.selectetapaatual();
   this.posicaoatual = this.selectposicao();
   this.buscarPosi = this.selectbuscarposicao();
   setInterval(() => {this.etapas1 = this.selectetapaatual();}, 5000);
   setInterval(() => {this.etapas = this.selectetapaatual();}, 15000);
   setInterval(() => {this.posicaoatual = this.selectposicao();}, 8000);
   //iniciar condição de forno estiver ligado
    setInterval(() => {
      if(this.ligar===1){
        console.log('correto');
        this.etapas = this.selectetapaatual();
      }else{
        console.log('erro');
      }
      }, 10000);

  }

  selectTbMotor(): Observable<Motor[]>{
    return this.groceryListCrudService.SelectMotor();
    }

    selectposicao(): Observable<Posicao[]>{
      return this.posicao.selectPosicao();
    }

    selectbuscarposicao(): Observable<Posicao[]>{
      return this.posicao.selectBuscarPosicao();
    }

  // select
  selectretornoligado(): Observable<Forno[]>{
    return this.fornocrud.selectReceita();
  }

  selectetapaatual(): Observable<Etapaatual[]>{
    return this.fornocrud.selectEtapaAtual();
  }
  //update no banco para ligar forno
  ligarforno(){
    const url = `https://nodesqlclp.herokuapp.com/forno`;
    const ligar: Forno={
      btligarforno: 1,
      fornoligado: 0
    };
    this.http.put(url, ligar).subscribe(
      resultado => {
        console.log('LIGAR FORNO');
      });
      this.ligandoforno();
      this.etapas = this.selectetapaatual();
      setTimeout(() =>{this.forno = this.selectretornoligado();},5000);
      this.ligar = 1;
      console.log('teste ligar', this.ligar);
 }
 // desligar forno
  desligarforno(){
    const url = `https://nodesqlclp.herokuapp.com/forno`;
    const ligar: Forno={
      btligarforno: 0,
      fornoligado: 0
    };
    this.http.put(url, ligar).subscribe(
      resultado => {
        console.log('DESLIGAR FORNO');
      });
      this.desligandoforno();
      setTimeout(() =>{this.forno = this.selectretornoligado();},5000);
      this.ligar = 0;

      console.log('teste ligar', this.ligar);
  }

  //tela de carregamento
  async ligandoforno() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'LIGANDO FORNO...',
      duration: 4500
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  async desligandoforno() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'DESLIGANDO FORNO',
      duration: 4500
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  ligarMotor(): void{
    const ligar: Motor ={
      id: 1,
      nome: '',
      ligar: 1,
      retLigado: 0,
      falha: 0,
      manuAuto: 0,
      corrente:0,
      freqSaida: 0,
      freqAuto: 0,
      freqManual: 0,
      rearme: 0,
  };
   this.motor$=this.groceryListCrudService.ligarMotor(ligar);
   setTimeout(() =>{this.motor$ = this.selectTbMotor();},2000);
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  desligarMotor(): void{
    //console.log('TESTE FUNÇÂO DESLIGAR');
    const ligar: Motor ={
      id: 1,
      nome: '',
      ligar: 0,
      retLigado: 0,
      falha: 0,
      manuAuto: 0,
      corrente:0,
      freqSaida: 0,
      freqAuto: 0,
      freqManual: 0,
      rearme: 0,
  };
   this.motor$=this.groceryListCrudService.ligarMotor(ligar);
   setTimeout(() =>{this.motor$ = this.selectTbMotor();},2000);
  };

  async presentAlert(nomereceita: string, id: number) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Buscar Posição',
      message: 'Qual posição :',
      inputs: [
        {
          name: 'name',
          type: 'number',
          placeholder: 'Posição'
        }],
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancelar',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
console.log('cancelar');

          }
        }, {
          text: 'Carregar',
          id: 'confirm-button',
          handler: (name) => {
            this.text = name;
            console.log('Confirm Cancel: blah',name);
            console.log('teste',this.text);
          }
        }
      ]
    });

    await alert.present();
  }

  carregarposicao(){
    const url = `http://localhost:3000/posicao/buscaposicao`;
    console.log('id receita teste', this.text);
    const posicao: BuscarPosicao={
      // eslint-disable-next-line @typescript-eslint/naming-convention
      posicao_buscar: this.text
    };
    this.http.put(url, posicao).subscribe(
      resultado => {
        console.log('Botão Acionado');
      });
      //setTimeout(() =>{this.carregarreceitadesacionar();},5000);
 }

}
