import { RoyalStraightFlush } from 'modelo/jogadas/royal-straight-flush';
import { StraightFlush } from 'modelo/jogadas/straight-flush';
import { Quadra } from 'modelo/jogadas/quadra';
import { FullHouse } from 'modelo/jogadas/full-house';

export class AvaliadorDeJogadas {
  constructor() {
    this.catalogoDeJogadas = [RoyalStraightFlush, StraightFlush, Quadra, FullHouse];
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
