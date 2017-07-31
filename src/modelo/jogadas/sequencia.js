import { PesoDaJogada } from './peso-da-jogada';

export class Sequencia {
  static testarJogada(maoDoJogador) {
    let cartasOrdenadas = maoDoJogador.obterValoresDasCartasEmOrdemCrescente();
    let somaDasDiferencas = 0;
    for (let i = 0; i < cartasOrdenadas.length - 1; i++) {
      let cartaAtual = cartasOrdenadas[i];
      let proximaCarta = cartasOrdenadas[i + 1];
      somaDasDiferencas += proximaCarta - cartaAtual;
    }
    let ehSequencia = somaDasDiferencas === 4;
    return ehSequencia ? PesoDaJogada.Sequencia : 0;
  }
}
