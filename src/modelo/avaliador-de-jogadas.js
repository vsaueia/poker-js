import { RoyalStraightFlush } from 'modelo/jogadas/royal-straight-flush';
import { StraightFlush } from 'modelo/jogadas/straight-flush';
import { Quadra } from 'modelo/jogadas/quadra';
import { FullHouse } from 'modelo/jogadas/full-house';
import { Flush } from 'modelo/jogadas/flush';
import { Sequencia } from 'modelo/jogadas/sequencia';

export class AvaliadorDeJogadas {
  constructor() {
    this.catalogoDeJogadas = [RoyalStraightFlush, StraightFlush, Quadra, FullHouse,
      Flush, Sequencia];
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
