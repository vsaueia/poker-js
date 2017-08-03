import { PesoDaJogada } from './peso-da-jogada';

export class Sequencia {
  static testarJogada(maoDoJogador) {
    let cartasOrdenadas = maoDoJogador.obterValoresDasCartasEmOrdemCrescente();
    let ehSequencia = true;

    for (let i = 0; i < cartasOrdenadas.length - 1; i++) {
      let cartaAtual = cartasOrdenadas[i];
      let proximaCarta = cartasOrdenadas[i + 1];
      if ((cartaAtual + 1) !== proximaCarta) {
        ehSequencia = false;
        break;
      }
    }

    return ehSequencia ? PesoDaJogada.Sequencia : 0;
  }
}
