import { RoyalStraightFlush } from 'modelo/jogadas/royal-straight-flush';
import { StraightFlush } from 'modelo/jogadas/straight-flush';
import { Quadra } from 'modelo/jogadas/quadra';
import { FullHouse } from 'modelo/jogadas/full-house';
import { Flush } from 'modelo/jogadas/flush';
import { Sequencia } from 'modelo/jogadas/sequencia';
import { Trinca } from 'modelo/jogadas/trinca';
import { DuasDuplas } from 'modelo/jogadas/duas-duplas';
import { UmaDupla } from 'modelo/jogadas/uma-dupla';
import { PesoDaJogada } from 'modelo/jogadas/peso-da-jogada';
import { CartaAlta } from 'modelo/jogadas/carta-alta';

export class AvaliadorDeJogadas {
  constructor() {
    this.catalogoDeJogadas = [RoyalStraightFlush, StraightFlush, Quadra, FullHouse,
      Flush, Sequencia, Trinca, DuasDuplas, UmaDupla];
  }
  avaliarJogada(maoDoJogador) {
    for (let i = 0; i < this.catalogoDeJogadas.length; i++) {
      let jogada = this.catalogoDeJogadas[i].testarJogada(maoDoJogador);
      if (jogada > 0) {
        return {
          nomeDaJogada: this.catalogoDeJogadas[i].name,
          pontuacao: jogada
        };
      }
    }
    return {
      nomeDaJogada: CartaAlta.Nome,
      pontuacao: PesoDaJogada.CartaAlta,
      rankingParaDesempate: CartaAlta.calcularRankingParaDesempate(maoDoJogador)
    };
  }
}
