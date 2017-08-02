import { PesoDaJogada } from './peso-da-jogada';
import { Trinca } from './trinca';
import { Dupla } from './dupla';

export class FullHouse {
  static testarJogada(maoDoJogador) {
    let valoresDasCartas = maoDoJogador.obterValoresDasCartasEmOrdemCrescente();
    let contagemDeCartas = [];
    for (let i = 0; i < 14; i++) {
      contagemDeCartas[i] = 0;
    }
    valoresDasCartas.forEach(valorDaCarta => contagemDeCartas[valorDaCarta] += 1);

    let temTrinca = Trinca.testarJogada(maoDoJogador) > 0;
    let temDupla = Dupla.testarJogada(maoDoJogador) > 0;
    let ehFullHouse = temTrinca && temDupla;

    return ehFullHouse ? PesoDaJogada.FullHouse : 0;
  }
}
