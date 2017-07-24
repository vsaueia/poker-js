import { Carta } from './carta';

export class MaoDoJogador {
  constructor(nomeDoJogador, cartas) {
    this.validarEntrada(cartas);
    this.validarQuantidadeDeCartas(cartas);
    this.cartas = cartas;
    this.nomeDoJogador = nomeDoJogador;
  }

  validarQuantidadeDeCartas(cartas) {
    if (cartas.length !== 5) {
      throw new Error('cada jogador só pode ter cinco cartas');
    }
  }

  validarEntrada(cartas) {
    if (!(cartas instanceof Array) || !(cartas[0] instanceof Carta)) {
      throw new Error('entrada inválida');
    }
  }
}
