import { PesoDaJogada } from './peso-da-jogada';

export class Flush {
  static testarJogada(maoDoJogador) {
    let naipeDeReferencia = maoDoJogador.cartas[0].naipe;
    let naipes = maoDoJogador.cartas.map(carta => carta.naipe);
    let ehFlush = naipes.every(naipe => naipe === naipeDeReferencia);
    return ehFlush ? PesoDaJogada.Flush : 0;
  }
}
