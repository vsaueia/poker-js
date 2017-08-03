import { PesoDaJogada } from 'modelo/jogadas/peso-da-jogada';

export class DuasDuplas {
  static testarJogada(maoDoJogador) {
    let valoresDasCartas = maoDoJogador.obterValoresDasCartasEmOrdemCrescente();
    let contagemDeCartas = [];
    for (let i = 0; i < 14; i++) {
      contagemDeCartas[i] = 0;
    }
    valoresDasCartas.forEach(valorDaCarta => contagemDeCartas[valorDaCarta] += 1);

    let ehDuasDuplas = contagemDeCartas.filter(contagem => contagem === 2).length === 2;
    return ehDuasDuplas ? PesoDaJogada.DuasDuplas : 0;
  }
}
