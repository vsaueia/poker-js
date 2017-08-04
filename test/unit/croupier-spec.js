import { Croupier } from 'modelo/croupier';
import { PesoDaJogada } from 'modelo/jogadas/peso-da-jogada';
import { LeitorDeCartas } from 'servicos/leitor-de-cartas';
import { MaoDoJogador } from 'modelo/mao-do-jogador';

describe('Croupier', () => {
  describe('deve identificar ganhador', () => {
    let nomeDoJogador1 = 'jogador1';
    let nomeDoJogador2 = 'jogador2';
    it('entre royal straight flush e sequencia', () => {
      let resultadoEsperado = {
        ganhador: nomeDoJogador1,
        pontuacaoDoGanhador: PesoDaJogada.RoyalStraightFlush,
        jogadaDoGanhador: 'RoyalStraightFlush'
      };
      let cartasJogador1 = LeitorDeCartas.obterCartas('TC JC QC KC AC');
      let maoDoJogador1 = new MaoDoJogador(nomeDoJogador1, cartasJogador1);
      let cartasJogador2 = LeitorDeCartas.obterCartas('3O 4C 5E 6P 7E');
      let maoDoJogador2 = new MaoDoJogador(nomeDoJogador2, cartasJogador2);

      let resultadoDaRodada = Croupier.analisarRodada(maoDoJogador1, maoDoJogador2);

      expect(resultadoDaRodada).toEqual(resultadoEsperado);
    });

    it('entre sequencia e dupla', () => {
      let resultadoEsperado = {
        ganhador: nomeDoJogador2,
        pontuacaoDoGanhador: PesoDaJogada.Sequencia,
        jogadaDoGanhador: 'Sequencia'
      };
      let cartasJogador1 = LeitorDeCartas.obterCartas('TC TE QC KC AC');
      let maoDoJogador1 = new MaoDoJogador(nomeDoJogador1, cartasJogador1);
      let cartasJogador2 = LeitorDeCartas.obterCartas('3O 4C 5E 6P 7E');
      let maoDoJogador2 = new MaoDoJogador(nomeDoJogador2, cartasJogador2);

      let resultadoDaRodada = Croupier.analisarRodada(maoDoJogador1, maoDoJogador2);

      expect(resultadoDaRodada).toEqual(resultadoEsperado);
    });
  });
});
