abstract class Lavoratori {
  codice: number;
  inps: number;
  irpef: number;
  ral: number;

  constructor(_ral:number,_codice: number,_inps: number,_irpef: number){
    this.ral=_ral;
    this.codice= _codice;
    this.inps=_inps;
    this.irpef= _irpef;
  }

  utiletasse():number {
    let utile = Number((this.ral * this.codice / 100).toFixed(2));
    return utile;
  };

  inpstasse():number {
    let inps = Number((this.utiletasse() * this.inps / 100).toFixed(2));
    return inps;
  };

  irpeftasse():number {
    let irpef = Number((this.utiletasse() * this.irpef / 100).toFixed(2));
    return irpef;
  };

  ran():number {
    let ran = Number((this.utiletasse() - (this.inpstasse() + this.irpeftasse())).toFixed(2));
    return ran;
  };
}


class Professionista extends Lavoratori {

  constructor(_ral: number, _codice: number = 78, _inps: number = 25.72, _irpef: number = 5){
    super(_ral,_codice,_inps,_irpef);
  }
}


class Artigiani extends Lavoratori {

  constructor(_ral: number, _codice: number = 67, _inps: number = 35, _irpef: number = 15) {
    super(_ral,_codice, _inps, _irpef);
  }
}


class Commercianti extends Lavoratori {

  constructor(_ral: number, _codice: number = 40, _inps: number = 35, _irpef: number = 15) {
    super(_ral, _codice, _inps, _irpef);
  }
}


let professionista = new Professionista(1000);
console.log(`
\n
-Professionista-
il tuo utile è di: ${professionista.utiletasse()} euro.\n
il tuo inps è di: ${professionista.inpstasse()} euro.\n
il tuo irpef è di: ${ professionista.irpeftasse() } euro.\n
il tuo utile è di: ${ professionista.ran()} euro.
\n
`);

let artigiani = new Artigiani(1000);
console.log(`
\n
-Artigiani-
il tuo utile è di: ${artigiani.utiletasse()} euro.\n
il tuo inps è di: ${artigiani.inpstasse()} euro.\n
il tuo irpef è di: ${artigiani.irpeftasse()} euro.\n
il tuo utile è di: ${artigiani.ran()} euro.
\n
`);

let commercialista = new Commercianti(1000);
console.log(`
\n
-Commercialista-
il tuo utile è di: ${commercialista.utiletasse()} euro.\n
il tuo inps è di: ${commercialista.inpstasse()} euro.\n
il tuo irpef è di: ${commercialista.irpeftasse()} euro.\n
il tuo utile è di: ${commercialista.ran()} euro.
\n
`);

