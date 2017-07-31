import { Carta } from './carta';
import { AvaliadorDeJogadas } from './avaliador-de-jogadas';

export class MaoDoJogador {
  constructor(nomeDoJogador, cartas) {
    this.validarEntrada(cartas);
    this.validarQuantidadeDeCartas(cartas);
    this.cartas = cartas;
    this.nomeDoJogador = nomeDoJogador;
    this.avaliadorDeJogadas = new AvaliadorDeJogadas();
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
    return this.avaliadorDeJogadas.avaliarJogada(this);
  }

  obterValoresDasCartasEmOrdemCrescente() {
    let valores = this.cartas.map(carta => carta.valor);
    return valores.sort((a, b) => a - b);
  }
}
