export class Forno{

    btligarforno: number;
    fornoligado: number;

    constructor(btligarforno: number ,fornoligado: number){
        this.btligarforno = btligarforno;
        this.fornoligado = fornoligado;
    }
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export class Posicao{

    posicao: number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    posicao_buscar: number;

    constructor(posicao: number ){
        this.posicao = posicao;

    }
}

export class BuscarPosicao{

    // eslint-disable-next-line @typescript-eslint/naming-convention
    posicao_buscar: number;

    // eslint-disable-next-line @typescript-eslint/naming-convention
    constructor(posicao_buscar: number){

        this.posicao_buscar = posicao_buscar;
    }
}

export class Etapaatual{

    etapaatual: number;
    temporeceita: number;
    tempoatual: number;
    temperaturareceita: number;
    temperatiraatual: number;

    constructor(  etapaatual: number,
        temporeceita: number,
        tempoatual: number,
        temperaturareceita: number,
        temperatiraatual: number){

    this.etapaatual = etapaatual;
    this.temperatiraatual = temperatiraatual;
    this.temperaturareceita = temperaturareceita;
    this.tempoatual = tempoatual;
    this.temporeceita = temporeceita;
    }
}
