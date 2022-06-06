
export class Receita{
    id: number;
    nomereceita: string;
    settempo1: number;
    settemperatura1: number;
    settempo2: number;
    settemperatura2: number;
    settempo3: number;
    settemperatura3: number;
    settempo4: number;
    settemperatura4: number;
    settempo5: number;
    settemperatura5: number;
    settempo6: number;
    settemperatura6: number;
    settempo7: number;
    settemperatura7: number;
    settempo8: number;
    settemperatura8: number;
    constructor(
        id: number,
        nomereceita: string,
        settempo1: number,
        settemperatura1: number,
        settempo2: number,
        settemperatura2: number,
        settempo3: number,
        settemperatura3: number,
        settempo4: number,
        settemperatura4: number,
        settempo5: number,
        settemperatura5: number,
        settempo6: number,
        settemperatura6: number,
        settempo7: number,
        settemperatura7: number,
        settempo8: number,
        settemperatura8: number,
    ){
        this.id = id;
        this.nomereceita = nomereceita;
        this.settemperatura1 = settemperatura1;
        this.settempo1 = settempo1;
        this.settemperatura2 = settemperatura2;
        this.settempo2 = settempo2;
        this.settemperatura3 = settemperatura3;
        this.settempo3 = settempo3;
        this.settemperatura4 = settemperatura4;
        this.settempo4 = settempo4;
        this.settemperatura5 = settemperatura5;
        this.settempo5 = settempo5;
        this.settemperatura6 = settemperatura6;
        this.settempo6 = settempo6;
        this.settemperatura7 = settemperatura7;
        this.settempo7 = settempo7;
        this.settemperatura8 = settemperatura8;
        this.settempo8 = settempo8;
    }

}

// eslint-disable-next-line @typescript-eslint/naming-convention
export class receitateste{
    nomereceita: string;

    constructor(nomereceita: string){
        nomereceita = this.nomereceita;
    }
}

