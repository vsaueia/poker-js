export class Croupier {
  static analisarRodada(maoDoJogador1, maoDoJogador2) {
    let jogadaDoJogador1 = maoDoJogador1.calcularJogada();
    let jogadaDoJogador2 = maoDoJogador2.calcularJogada();

    if (jogadaDoJogador1.pontuacao > jogadaDoJogador2.pontuacao) {
      return {
        ganhador: maoDoJogador1.nomeDoJogador,
        pontuacaoDoGanhador: jogadaDoJogador1.pontuacao,
        jogadaDoGanhador: jogadaDoJogador1.nomeDaJogada
      };
    }
    return {
      ganhador: maoDoJogador2.nomeDoJogador,
      pontuacaoDoGanhador: jogadaDoJogador2.pontuacao,
      jogadaDoGanhador: jogadaDoJogador2.nomeDaJogada
    };
  }
}
