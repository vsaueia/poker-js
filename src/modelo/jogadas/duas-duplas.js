import { PesoDaJogada } from 'modelo/jogadas/peso-da-jogada';
import { JogadaBase } from './jogada-base';

export class DuasDuplas extends JogadaBase {
  static testarJogada(maoDoJogador) {
    let contagemDeCartas = this.obterContagemDeCartas(maoDoJogador);
    let ehDuasDuplas = contagemDeCartas.filter(contagem => contagem === 2).length === 2;
    return ehDuasDuplas ? PesoDaJogada.DuasDuplas : 0;
  }
}
