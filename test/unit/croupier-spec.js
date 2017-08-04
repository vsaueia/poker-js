import { Croupier } from 'modelo/croupier';
import { PesoDaJogada } from 'modelo/jogadas/peso-da-jogada';
import { LeitorDeCartas } from 'servicos/leitor-de-cartas';
import { MaoDoJogador } from 'modelo/mao-do-jogador';

describe('Croupier', () => {
  let nomeDoJogador1 = 'jogador1';
  let nomeDoJogador2 = 'jogador2';
  describe('deve identificar ganhador', () => {
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

    it('entre straight flush e quadra', () => {
      let resultadoEsperado = {
        ganhador: nomeDoJogador1,
        pontuacaoDoGanhador: PesoDaJogada.StraightFlush,
        jogadaDoGanhador: 'StraightFlush'
      };
      let cartasJogador1 = LeitorDeCartas.obterCartas('TC JC QC KC 9C');
      let maoDoJogador1 = new MaoDoJogador(nomeDoJogador1, cartasJogador1);
      let cartasJogador2 = LeitorDeCartas.obterCartas('3O 3C 3E 3P 7E');
      let maoDoJogador2 = new MaoDoJogador(nomeDoJogador2, cartasJogador2);

      let resultadoDaRodada = Croupier.analisarRodada(maoDoJogador1, maoDoJogador2);

      expect(resultadoDaRodada).toEqual(resultadoEsperado);
    });

    it('entre quadra e full house', () => {
      let resultadoEsperado = {
        ganhador: nomeDoJogador2,
        pontuacaoDoGanhador: PesoDaJogada.Quadra,
        jogadaDoGanhador: 'Quadra'
      };
      let cartasJogador1 = LeitorDeCartas.obterCartas('TC TE TO KC KC');
      let maoDoJogador1 = new MaoDoJogador(nomeDoJogador1, cartasJogador1);
      let cartasJogador2 = LeitorDeCartas.obterCartas('3O 3C 3E 3P 7E');
      let maoDoJogador2 = new MaoDoJogador(nomeDoJogador2, cartasJogador2);

      let resultadoDaRodada = Croupier.analisarRodada(maoDoJogador1, maoDoJogador2);

      expect(resultadoDaRodada).toEqual(resultadoEsperado);
    });

    it('entre full house e flush', () => {
      let resultadoEsperado = {
        ganhador: nomeDoJogador1,
        pontuacaoDoGanhador: PesoDaJogada.FullHouse,
        jogadaDoGanhador: 'FullHouse'
      };
      let cartasJogador1 = LeitorDeCartas.obterCartas('TC TE TO KC KC');
      let maoDoJogador1 = new MaoDoJogador(nomeDoJogador1, cartasJogador1);
      let cartasJogador2 = LeitorDeCartas.obterCartas('4O 3O 8O AO 7O');
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

    it('entre duas duplas e trinca', () => {
      let resultadoEsperado = {
        ganhador: nomeDoJogador1,
        pontuacaoDoGanhador: PesoDaJogada.Trinca,
        jogadaDoGanhador: 'Trinca'
      };
      let cartasJogador1 = LeitorDeCartas.obterCartas('TC TE TC KC AC');
      let maoDoJogador1 = new MaoDoJogador(nomeDoJogador1, cartasJogador1);
      let cartasJogador2 = LeitorDeCartas.obterCartas('3O 3C 5E 6P 7E');
      let maoDoJogador2 = new MaoDoJogador(nomeDoJogador2, cartasJogador2);

      let resultadoDaRodada = Croupier.analisarRodada(maoDoJogador1, maoDoJogador2);

      expect(resultadoDaRodada).toEqual(resultadoEsperado);
    });
  });

  describe('deve identificar empate entre jogadas iguais', () => {
    it('com royal straight flush', () => {
      let resultadoEsperado = {
        ganhador: '',
        pontuacaoDoGanhador: PesoDaJogada.RoyalStraightFlush,
        jogadaDoGanhador: 'RoyalStraightFlush'
      };
      let cartasJogador1 = LeitorDeCartas.obterCartas('TC JC QC KC AC');
      let maoDoJogador1 = new MaoDoJogador(nomeDoJogador1, cartasJogador1);
      let cartasJogador2 = LeitorDeCartas.obterCartas('JO KO AO QO TO');
      let maoDoJogador2 = new MaoDoJogador(nomeDoJogador2, cartasJogador2);

      let resultadoDaRodada = Croupier.analisarRodada(maoDoJogador1, maoDoJogador2);

      expect(resultadoDaRodada).toEqual(resultadoEsperado);
    });

    it('com full house', () => {
      let resultadoEsperado = {
        ganhador: '',
        pontuacaoDoGanhador: PesoDaJogada.FullHouse,
        jogadaDoGanhador: 'FullHouse'
      };
      let cartasJogador1 = LeitorDeCartas.obterCartas('TC TC TC KC KC');
      let maoDoJogador1 = new MaoDoJogador(nomeDoJogador1, cartasJogador1);
      let cartasJogador2 = LeitorDeCartas.obterCartas('TO TO KO KO TO');
      let maoDoJogador2 = new MaoDoJogador(nomeDoJogador2, cartasJogador2);

      let resultadoDaRodada = Croupier.analisarRodada(maoDoJogador1, maoDoJogador2);

      expect(resultadoDaRodada).toEqual(resultadoEsperado);
    });

    it('com carta alta e todas as cartas iguais', () => {
      let resultadoEsperado = {
        ganhador: '',
        pontuacaoDoGanhador: PesoDaJogada.CartaAlta,
        jogadaDoGanhador: 'CartaAlta'
      };
      let cartasJogador1 = LeitorDeCartas.obterCartas('AC TO 9C 4C 2E');
      let maoDoJogador1 = new MaoDoJogador(nomeDoJogador1, cartasJogador1);
      let cartasJogador2 = LeitorDeCartas.obterCartas('AO TC 9P 4E 2O');
      let maoDoJogador2 = new MaoDoJogador(nomeDoJogador2, cartasJogador2);

      let resultadoDaRodada = Croupier.analisarRodada(maoDoJogador1, maoDoJogador2);

      expect(resultadoDaRodada).toEqual(resultadoEsperado);
    });

    describe('deve desempatar pela maior carta', () => {
      it('no caso de carta alta', () => {
        let resultadoEsperado = {
          ganhador: nomeDoJogador1,
          pontuacaoDoGanhador: PesoDaJogada.CartaAlta,
          jogadaDoGanhador: 'CartaAlta'
        };
        let cartasJogador1 = LeitorDeCartas.obterCartas('AC TO 9C 4C 2E');
        let maoDoJogador1 = new MaoDoJogador(nomeDoJogador1, cartasJogador1);
        let cartasJogador2 = LeitorDeCartas.obterCartas('AO 6C 5C 4E 2O');
        let maoDoJogador2 = new MaoDoJogador(nomeDoJogador2, cartasJogador2);

        let resultadoDaRodada = Croupier.analisarRodada(maoDoJogador1, maoDoJogador2);

        expect(resultadoDaRodada).toEqual(resultadoEsperado);
      });

      it('no caso de quatro cartas iguais e só uma diferente', () => {
        let resultadoEsperado = {
          ganhador: nomeDoJogador2,
          pontuacaoDoGanhador: PesoDaJogada.CartaAlta,
          jogadaDoGanhador: 'CartaAlta'
        };
        let cartasJogador1 = LeitorDeCartas.obterCartas('AC QO 4C 3C 2E');
        let maoDoJogador1 = new MaoDoJogador(nomeDoJogador1, cartasJogador1);
        let cartasJogador2 = LeitorDeCartas.obterCartas('AO QC 4C 3E 5O');
        let maoDoJogador2 = new MaoDoJogador(nomeDoJogador2, cartasJogador2);

        let resultadoDaRodada = Croupier.analisarRodada(maoDoJogador1, maoDoJogador2);

        expect(resultadoDaRodada).toEqual(resultadoEsperado);
      });

      it('no caso de uma dupla', () => {
        let resultadoEsperado = {
          ganhador: nomeDoJogador2,
          pontuacaoDoGanhador: PesoDaJogada.UmaDupla,
          jogadaDoGanhador: 'UmaDupla'
        };
        let cartasJogador1 = LeitorDeCartas.obterCartas('AC AO 4C 3C 2E');
        let maoDoJogador1 = new MaoDoJogador(nomeDoJogador1, cartasJogador1);
        let cartasJogador2 = LeitorDeCartas.obterCartas('AO AE 4C 3E 5O');
        let maoDoJogador2 = new MaoDoJogador(nomeDoJogador2, cartasJogador2);

        let resultadoDaRodada = Croupier.analisarRodada(maoDoJogador1, maoDoJogador2);

        expect(resultadoDaRodada).toEqual(resultadoEsperado);
      });

      it('no caso de duas duplas', () => {
        let resultadoEsperado = {
          ganhador: nomeDoJogador1,
          pontuacaoDoGanhador: PesoDaJogada.DuasDuplas,
          jogadaDoGanhador: 'DuasDuplas'
        };
        let cartasJogador1 = LeitorDeCartas.obterCartas('AC AP 4C 4P 8E');
        let maoDoJogador1 = new MaoDoJogador(nomeDoJogador1, cartasJogador1);
        let cartasJogador2 = LeitorDeCartas.obterCartas('AO AE 3O 3E KO');
        let maoDoJogador2 = new MaoDoJogador(nomeDoJogador2, cartasJogador2);

        let resultadoDaRodada = Croupier.analisarRodada(maoDoJogador1, maoDoJogador2);

        expect(resultadoDaRodada).toEqual(resultadoEsperado);
      });

      it('no caso de trinca', () => {
        let resultadoEsperado = {
          ganhador: nomeDoJogador2,
          pontuacaoDoGanhador: PesoDaJogada.Trinca,
          jogadaDoGanhador: 'Trinca'
        };
        let cartasJogador1 = LeitorDeCartas.obterCartas('AC AP AP 2P 3E');
        let maoDoJogador1 = new MaoDoJogador(nomeDoJogador1, cartasJogador1);
        let cartasJogador2 = LeitorDeCartas.obterCartas('KO KE KO AE QO');
        let maoDoJogador2 = new MaoDoJogador(nomeDoJogador2, cartasJogador2);

        let resultadoDaRodada = Croupier.analisarRodada(maoDoJogador1, maoDoJogador2);

        expect(resultadoDaRodada).toEqual(resultadoEsperado);
      });
    });
  });
});
