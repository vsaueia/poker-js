import { Jogada } from './jogada';
import { Carta } from './carta';

export class Croupier {
  avaliarJogada(maoDoJogador) {
    if (this.ehRoyoalStraihtFlush(maoDoJogador)) {
      return Jogada.RoyalStraightFlush;
    }
    if (this.ehStraightFlush(maoDoJogador)) {
      return Jogada.StraightFlush;
    }
    return -1;
  }

  ehRoyoalStraihtFlush(maoDoJogador) {
    let cartasOrdenadas = maoDoJogador.obterValoresDasCartasEmOrdemCrescente();
    let terminaComAs = cartasOrdenadas[4] === Carta.As;

    return this.ehSequencia(maoDoJogador) && this.ehFlush(maoDoJogador) && terminaComAs;
  }

  ehStraightFlush(maoDoJogador) {
    return this.ehSequencia(maoDoJogador) && this.ehFlush(maoDoJogador);
  }

  ehSequencia(maoDoJogador) {
    let cartasOrdenadas = maoDoJogador.obterValoresDasCartasEmOrdemCrescente();
    let somaDasDiferencas = 0;
    for (let i = 0; i < cartasOrdenadas.length - 1; i++) {
      let cartaAtual = cartasOrdenadas[i];
      let proximaCarta = cartasOrdenadas[i + 1];
      somaDasDiferencas += proximaCarta - cartaAtual;
    }
    return somaDasDiferencas === 4;
  }

  ehFlush(maoDoJogador) {
    let naipeDeReferencia = maoDoJogador.cartas[0].naipe;
    let naipes = maoDoJogador.cartas.map(carta => carta.naipe);
    return naipes.every(naipe => naipe === naipeDeReferencia);
  }
}
