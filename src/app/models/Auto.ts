export interface Auto {
    id: number;
    ligar: number;
}

export interface RetornoLigado{
    retLigado: number;
}

export class Motor {
    public id: number;
    public nome: string;
    public ligar: number;
    public retLigado: number;
    public falha: number;
    public manuAuto: number;
    public corrente: number;
    public freqSaida: number;
    public freqAuto: number;
    public freqManual: number;
    public rearme: number;
}

export interface BtRearme{
    rearme: number;
}

export class Pessoas {
    public nome: string;
    public idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade= idade;
    }
}


/* eslint-disable eol-last */