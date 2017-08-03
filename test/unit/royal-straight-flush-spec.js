import { LeitorDeCartas } from 'servicos/leitor-de-cartas';
import { MaoDoJogador } from 'modelo/mao-do-jogador';
import { PesoDaJogada } from 'modelo/jogadas/peso-da-jogada';

describe('royal straight flush', () => {
  it('deve casar com royal straight flush', () => {
    let cartas = LeitorDeCartas.obterCartas('TO JO QO KO AO');
    let maoDoJogador = new MaoDoJogador('jogador1', cartas);

    let pesoDaJogada = maoDoJogador.calcularJogada();

    expect(pesoDaJogada).toBeGreaterThanOrEqual(PesoDaJogada.RoyalStraightFlush);
  });

  it('deve casar com royal straight flush, cartas fora de ordem', () => {
    let cartas = LeitorDeCartas.obterCartas('KO JO TO AO QO');
    let maoDoJogador = new MaoDoJogador('jogador1', cartas);

    let pesoDaJogada = maoDoJogador.calcularJogada();

    expect(pesoDaJogada).toBeGreaterThanOrEqual(PesoDaJogada.RoyalStraightFlush);
  });

  it('nao eh royal straight flush, cartas nao formam sequencia maior', () => {
    let cartas = LeitorDeCartas.obterCartas('9O JO TO QO KO');
    let maoDoJogador = new MaoDoJogador('jogador1', cartas);

    let pesoDaJogada = maoDoJogador.calcularJogada();

    expect(pesoDaJogada).toBeLessThan(PesoDaJogada.RoyalStraightFlush);
  });

  it('nao eh royal straight flush, cartas nao sao do mesmo naipe', () => {
    let cartas = LeitorDeCartas.obterCartas('9E JO TO QO KO');
    let maoDoJogador = new MaoDoJogador('jogador1', cartas);

    let pesoDaJogada = maoDoJogador.calcularJogada();

    expect(pesoDaJogada).toBeLessThan(PesoDaJogada.RoyalStraightFlush);
  });

  it('nao eh royal straight flush, cartas nao estao em sequencia', () => {
    let cartas = LeitorDeCartas.obterCartas('9E JO 2O QO KO');
    let maoDoJogador = new MaoDoJogador('jogador1', cartas);

    let pesoDaJogada = maoDoJogador.calcularJogada();

    expect(pesoDaJogada).toBeLessThan(PesoDaJogada.RoyalStraightFlush);
  });
});
