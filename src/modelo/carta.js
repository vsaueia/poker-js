import {Naipe} from './naipe';

const BASE = 10;
export class Carta {
  static As = 14;
  constructor(representacao) {
    let valor = representacao.charAt(0);
    if (!isNaN(parseInt(valor, BASE))) {
      this.valor = parseInt(valor, BASE);
    } else {
      this.valor = this.casosEspeciaisDeValores(valor);
    }
    this.naipe = Naipe.obterNaipe(representacao.charAt(1));
  }

  casosEspeciaisDeValores(valor) {
    switch (valor) {
    case 'T': return 10;
    case 'J': return 11;
    case 'Q': return 12;
    case 'K': return 13;
    case 'A': return Carta.As;
    default: throw new Error('valor da carta não identificado');
    }
  }
}
