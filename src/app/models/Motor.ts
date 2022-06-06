export class MotorAuto {
    id: number;
    nomemotor: string;
    ligar: number;
    retLigado: number;
    falha: number;
    manuAuto: number;
    corrente: number;
    freqSaida: number;
    freqAuto: number;
    freqManual: number;
    rearme: number;
    constructor(
        id: number,
        nomemotor: string,
        ligar: number,
        retLigado: number,
        falha: number,
        manuAuto: number,
        corrente: number,
        freqSaida: number,
        freqAuto: number,
        freqManual: number,
        rearme: number
    ){
    this.id = id;
    this.nomemotor = nomemotor;
    this.ligar = ligar;
    this.retLigado = retLigado;
    this.falha = falha;
    this.manuAuto = manuAuto;
    this.corrente = corrente;
    this.freqSaida = freqSaida;
    this.freqAuto = freqAuto;
    this.freqManual = freqManual;
    this.rearme = rearme;
    }
}
