import { PesoDaJogada } from 'modelo/jogadas/peso-da-jogada';

export class Trinca {
  static testarJogada(maoDoJogador) {
    let valoresDasCartas = maoDoJogador.obterValoresDasCartasEmOrdemCrescente();
    let contagemDeCartas = [];
    for (let i = 0; i < 14; i++) {
      contagemDeCartas[i] = 0;
    }
    valoresDasCartas.forEach(valorDaCarta => contagemDeCartas[valorDaCarta] += 1);

    let ehTrinca = contagemDeCartas.find(contagem => contagem === 3) !== undefined;

    return ehTrinca ? PesoDaJogada.Trinca : 0;
  }
}
