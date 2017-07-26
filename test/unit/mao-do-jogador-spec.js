import { LeitorDeCartas } from 'servicos/leitor-de-cartas';
import { MaoDoJogador } from 'modelo/mao-do-jogador';
import { Jogada } from 'modelo/jogada';

describe('Mao do jogador', () => {
  it('deve ter o nome do jogador que a possui', () => {
    let cartas = LeitorDeCartas.obterCartas('4P 4O 5P 5C 5E');
    let nomeDoJogador = 'jogador1';

    let maoDoJogador = new MaoDoJogador(nomeDoJogador, cartas);

    expect(maoDoJogador.nomeDoJogador).toBe(nomeDoJogador);
  });

  it('deve ter cinco cartas', () => {
    let cartas = LeitorDeCartas.obterCartas('4P 4O 5P 5C 5E');

    let maoDoJogador = new MaoDoJogador('', cartas);

    expect(maoDoJogador.cartas.length).toBe(5);
  });

  it('nao deve aceitar jogador com quantidade de cartas diferente de 5', () => {
    let cartas = LeitorDeCartas.obterCartas('4P 4O 5P 5C 5E 9O');

    expect(() => new MaoDoJogador('', cartas)).toThrow(new Error('cada jogador só pode ter cinco cartas'));
  });

  it('só pode aceitar array de cartas', () => {
    expect(() => new MaoDoJogador('', ['5C', '2P', '3C', '4E', 'AO'])).toThrow(new Error('entrada inválida'));
  });

  describe('Peso das jogadas', () => {
    describe('royal straight flush', () => {
      it('deve casar com royal straight flush', () => {
        let cartas = LeitorDeCartas.obterCartas('TO JO QO KO AO');
        let maoDoJogador = new MaoDoJogador('jogador1', cartas);

        let pesoDaJogada = maoDoJogador.calcularJogada();

        expect(pesoDaJogada).toBeGreaterThanOrEqual(Jogada.RoyalStraightFlush);
      });

      it('deve casar com royal straight flush, cartas fora de ordem', () => {
        let cartas = LeitorDeCartas.obterCartas('KO JO TO AO KO');
        let maoDoJogador = new MaoDoJogador('jogador1', cartas);

        let pesoDaJogada = maoDoJogador.calcularJogada();

        expect(pesoDaJogada).toBeGreaterThanOrEqual(Jogada.RoyalStraightFlush);
      });

      it('nao eh royal straight flush, cartas nao formam sequencia maior', () => {
        let cartas = LeitorDeCartas.obterCartas('9O JO TO QO KO');
        let maoDoJogador = new MaoDoJogador('jogador1', cartas);

        let pesoDaJogada = maoDoJogador.calcularJogada();

        expect(pesoDaJogada).toBeLessThan(Jogada.RoyalStraightFlush);
      });

      it('nao eh royal straight flush, cartas nao sao do mesmo naipe', () => {
        let cartas = LeitorDeCartas.obterCartas('9E JO TO QO KO');
        let maoDoJogador = new MaoDoJogador('jogador1', cartas);

        let pesoDaJogada = maoDoJogador.calcularJogada();

        expect(pesoDaJogada).toBeLessThan(Jogada.RoyalStraightFlush);
      });

      it('nao eh royal straight flush, cartas nao estao em sequencia', () => {
        let cartas = LeitorDeCartas.obterCartas('9E JO 2O QO KO');
        let maoDoJogador = new MaoDoJogador('jogador1', cartas);

        let pesoDaJogada = maoDoJogador.calcularJogada();

        expect(pesoDaJogada).toBeLessThan(Jogada.RoyalStraightFlush);
      });
    });

    describe('straight flush', () => {
      it('deve casar com straight flush', () => {
        let cartas = LeitorDeCartas.obterCartas('TO JO QO KO 9O');
        let maoDoJogador = new MaoDoJogador('jogador1', cartas);

        let pesoDaJogada = maoDoJogador.calcularJogada();

        expect(pesoDaJogada).toBeGreaterThanOrEqual(Jogada.StraightFlush);
      });
    });
  });
});
