import { PesoDaJogada } from './peso-da-jogada';
import { Trinca } from './trinca';
import { UmaDupla } from './uma-dupla';

export class FullHouse {
  static testarJogada(maoDoJogador) {
    let temTrinca = Trinca.testarJogada(maoDoJogador) > 0;
    let temDupla = UmaDupla.testarJogada(maoDoJogador) > 0;
    let ehFullHouse = temTrinca && temDupla;

    return ehFullHouse ? PesoDaJogada.FullHouse : 0;
  }
}
