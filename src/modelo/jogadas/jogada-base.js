export class JogadaBase {
  static obterContagemDeCartas(maoDoJogador) {
    let valoresDasCartas = maoDoJogador.obterValoresDasCartasEmOrdemCrescente();
    let contagemDeCartas = [];
    // 15 magic number
    for (let i = 0; i < 15; i++) {
      contagemDeCartas[i] = 0;
    }
    valoresDasCartas.forEach(valorDaCarta => contagemDeCartas[valorDaCarta] += 1);
    return contagemDeCartas;
  }
}
