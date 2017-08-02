import { PesoDaJogada } from 'modelo/jogadas/peso-da-jogada';

export class Dupla {
  static testarJogada(maoDoJogador) {
    let valoresDasCartas = maoDoJogador.obterValoresDasCartasEmOrdemCrescente();
    let contagemDeCartas = [];
    for (let i = 0; i < 14; i++) {
      contagemDeCartas[i] = 0;
    }
    valoresDasCartas.forEach(valorDaCarta => contagemDeCartas[valorDaCarta] += 1);

    let ehTrinca = contagemDeCartas.find(contagem => contagem === 2) !== undefined;

    return ehTrinca ? PesoDaJogada.Dupla : 0;
  }
}
