import { Flush } from './flush';
import { Sequencia } from './sequencia';
import { PesoDaJogada } from './peso-da-jogada';

export class StraightFlush {
  static testarJogada(maoDoJogador) {
    let ehFlush = Flush.testarJogada(maoDoJogador) > 0;
    let ehSequencia = Sequencia.testarJogada(maoDoJogador) > 0;
    let ehStraightFlush = ehFlush && ehSequencia;
    return ehStraightFlush ? PesoDaJogada.StraightFlush : 0;
  }
}
