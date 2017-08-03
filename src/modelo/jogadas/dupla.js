import { PesoDaJogada } from 'modelo/jogadas/peso-da-jogada';
import { JogadaBase } from './jogada-base';

export class Dupla extends JogadaBase {
  static testarJogada(maoDoJogador) {
    let contagemDeCartas = this.obterContagemDeCartas(maoDoJogador);
    let ehUmaDupla = contagemDeCartas.find(contagem => contagem === 2) !== undefined;
    return ehUmaDupla ? PesoDaJogada.Dupla : 0;
  }
}
