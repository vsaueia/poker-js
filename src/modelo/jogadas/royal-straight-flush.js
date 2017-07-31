import { Carta } from 'modelo/carta';
import { StraightFlush } from './straight-flush';
import { PesoDaJogada } from './peso-da-jogada';

export class RoyalStraightFlush {
  static testarJogada(maoDoJogador) {
    let cartasOrdenadas = maoDoJogador.obterValoresDasCartasEmOrdemCrescente();
    let terminaComAs = cartasOrdenadas[4] === Carta.As;
    let ehStraightFlush = StraightFlush.testarJogada(maoDoJogador) > 0;
    let ehRoyalStraightFlush = ehStraightFlush && terminaComAs;
    return ehRoyalStraightFlush ? PesoDaJogada.RoyalStraightFlush : 0;
  }
}
