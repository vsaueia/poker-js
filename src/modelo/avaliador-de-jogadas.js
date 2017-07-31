import { RoyalStraightFlush } from 'modelo/jogadas/royal-straight-flush';
import { StraightFlush } from 'modelo/jogadas/straight-flush';
import { Quadra } from 'modelo/jogadas/quadra';

export class AvaliadorDeJogadas {
  constructor() {
    this.catalogoDeJogadas = [RoyalStraightFlush, StraightFlush, Quadra];
  }
  avaliarJogada(maoDoJogador) {
    for (let i = 0; i < this.catalogoDeJogadas.length; i++) {
      let jogada = this.catalogoDeJogadas[i].testarJogada(maoDoJogador);
      if (jogada > 0) {
        return jogada;
      }
    }
    return 0;
  }
}
