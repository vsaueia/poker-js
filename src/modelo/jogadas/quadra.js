import { PesoDaJogada } from './peso-da-jogada';
import { JogadaBase } from './jogada-base';

export class Quadra extends JogadaBase {
  static testarJogada(maoDoJogador) {
    let contagemDeCartas = this.obterContagemDeCartas(maoDoJogador);
    let ehQuadra = contagemDeCartas.find(contagem => contagem === 4) !== undefined;
    return ehQuadra ? PesoDaJogada.Quadra : 0;
  }
}
