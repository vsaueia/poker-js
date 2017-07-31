import { PesoDaJogada } from './peso-da-jogada';

export class Quadra {
  static testarJogada(maoDoJogador) {
    let valoresDasCartas = maoDoJogador.obterValoresDasCartasEmOrdemCrescente();
    let contagemDeCartas = [];
    for (let i = 0; i < 14; i++) {
      contagemDeCartas[i] = 0;
    }
    valoresDasCartas.forEach(valorDaCarta => contagemDeCartas[valorDaCarta] += 1);

    let ehQuadra = contagemDeCartas.find(contagem => contagem === 4) !== undefined;

    return ehQuadra ? PesoDaJogada.Quadra : 0;
  }
}
