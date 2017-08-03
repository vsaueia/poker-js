import { PesoDaJogada } from 'modelo/jogadas/peso-da-jogada';
import { JogadaBase } from './jogada-base';

export class Trinca extends JogadaBase {
  static testarJogada(maoDoJogador) {
    let contagemDeCartas = this.obterContagemDeCartas(maoDoJogador);
    let ehTrinca = contagemDeCartas.find(contagem => contagem === 3) !== undefined;
    return ehTrinca ? PesoDaJogada.Trinca : 0;
  }
}
