export class CartaAlta {
  static Nome = 'CartaAlta';
  static calcularRankingParaDesempate(maoDoJogador) {
    let valoresDasCartas = maoDoJogador.obterValoresDasCartasEmOrdemCrescente();
    let fator = 0.1;
    let ranking = 0;
    valoresDasCartas.forEach(valor => {
      ranking += valor / fator;
      fator *= 10;
    });
    return ranking;
  }
}
