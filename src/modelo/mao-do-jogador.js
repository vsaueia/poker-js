import { Carta } from './carta';
import { Croupier } from './croupier';

export class MaoDoJogador {
  constructor(nomeDoJogador, cartas) {
    this.validarEntrada(cartas);
    this.validarQuantidadeDeCartas(cartas);
    this.cartas = cartas;
    this.nomeDoJogador = nomeDoJogador;
    this.croupier = new Croupier();
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

  calcularJogada() {
    return this.croupier.avaliarJogada(this);
  }

  obterValoresDasCartasEmOrdemCrescente() {
    let valores = this.cartas.map(carta => carta.valor);
    return valores.sort((a, b) => a - b);
  }
}
