export class Croupier {
  static analisarRodada(maoDoJogador1, maoDoJogador2) {
    let jogadaDoJogador1 = maoDoJogador1.calcularJogada();
    let jogadaDoJogador2 = maoDoJogador2.calcularJogada();

    if (jogadaDoJogador1.pontuacao === jogadaDoJogador2.pontuacao) {
      if (jogadaDoJogador1.rankingParaDesempate === jogadaDoJogador2.rankingParaDesempate) {
        return Croupier.obterJogadaDeRetorno('', jogadaDoJogador1.pontuacao,
          jogadaDoJogador1.nomeDaJogada);
      }
      if (jogadaDoJogador1.rankingParaDesempate > jogadaDoJogador2.rankingParaDesempate) {
        return Croupier.obterJogadaDeRetorno(maoDoJogador1.nomeDoJogador, jogadaDoJogador1.pontuacao,
          jogadaDoJogador1.nomeDaJogada);
      }
      return Croupier.obterJogadaDeRetorno(maoDoJogador2.nomeDoJogador, jogadaDoJogador2.pontuacao,
        jogadaDoJogador2.nomeDaJogada);
    }
    if (jogadaDoJogador1.pontuacao > jogadaDoJogador2.pontuacao) {
      return Croupier.obterJogadaDeRetorno(maoDoJogador1.nomeDoJogador, jogadaDoJogador1.pontuacao,
          jogadaDoJogador1.nomeDaJogada);
    }
    return Croupier.obterJogadaDeRetorno(maoDoJogador2.nomeDoJogador, jogadaDoJogador2.pontuacao,
          jogadaDoJogador2.nomeDaJogada);
  }

  static obterJogadaDeRetorno(nomeDoJogador, pontuacao, nomeDaJogada) {
    return {
      ganhador: nomeDoJogador,
      pontuacaoDoGanhador: pontuacao,
      jogadaDoGanhador: nomeDaJogada
    };
  }
}
