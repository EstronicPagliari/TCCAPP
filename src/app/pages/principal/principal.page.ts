/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {RetornoLigado,BtRearme, Motor} from 'src/app/models/Auto';
import { HttpHeaders } from'@angular/common/http';
import { Observable } from 'rxjs';
import { GroceryListCrudService } from 'src/app/services/grocery-list-crud.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

httpOptions: { headers: HttpHeaders } = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private formData: FormGroup;
  private texto: string;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public motor$: Observable<Motor[]>;
  public falha$: Observable<Motor[]>;
  freq$: Observable<Motor[]>;
  motorfalha$: Observable<Motor[]>;
  retligado$: Observable<RetornoLigado[]>;
  ligar$: Observable<Motor[]>;
  rearme$: Observable<BtRearme[]>;
  values = '';

  constructor(private groceryListCrudService: GroceryListCrudService) { }

  ngOnInit() {
    this.motor$ = this.selectTbMotor();
    this.falha$ = this.selectTbMotorStatus();
    this.motorfalha$ = this.selectTbMotorStatus();
    this.freq$ = this.selectTbMotorFreq();
    this.rearme$ = this.selectrearme();
    setInterval(() => {this.falha$ = this.selectTbMotorStatus();}, 5000);

  }

  onSubmit(){
    console.log(this.formData.value);
  }
  teste(){
    this.ngOnInit();
    }
    // select motor
    selectTbMotor(): Observable<Motor[]>{
    return this.groceryListCrudService.SelectMotor();
    }
    selectTbMotorStatus(): Observable<Motor[]>{
    return this.groceryListCrudService.SelectMotor();
    }
    // select retorno
    selectrearme(): Observable<BtRearme[]>{
    return this.groceryListCrudService.selectrearme();
    }
    // função que emite um pulso no botão de ligar
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
    //função que emite um pulso no botão de desligar
    // eslint-disable-next-line @typescript-eslint/naming-convention
    DesligarMotor(): void{
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
    btRearme(): void{
      const rearmar: BtRearme={
        rearme: 1,
      };
      this.rearme$=this.groceryListCrudService.btrearme(rearmar);
      setTimeout(() =>{this.btRearmeNo(rearmar);this.motorfalha$ = this.selectTbMotorStatus();},2000);
    }
    btRearmeNo(newMotor: Partial<BtRearme>): void{
      const rearmar: BtRearme={
        rearme: 0,
      };
      this.rearme$=this.groceryListCrudService.btrearme(rearmar);
    }
    altFrequencia(value: number) {
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
        freqManual: value,
        rearme: 0,
    };
      console.log('numero digitado', ligar);
      this.freq$=this.groceryListCrudService.freqmanual(ligar);
      this.falha$ = this.selectTbMotorStatus();
    }
    altFrequenciaalt(value: number){
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
        freqManual: value,
        rearme: 0,
    };
      console.log('numero digitado', ligar);
      this.freq$=this.groceryListCrudService.freqmanual(ligar);
      this.falha$ = this.selectTbMotorStatus();
    }
    selectTbMotorFreq(): Observable<Motor[]>{
      return this.groceryListCrudService.selectMotorFreq();
    }

}
