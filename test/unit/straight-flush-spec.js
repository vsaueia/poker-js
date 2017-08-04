import { LeitorDeCartas } from 'servicos/leitor-de-cartas';
import { MaoDoJogador } from 'modelo/mao-do-jogador';
import { PesoDaJogada } from 'modelo/jogadas/peso-da-jogada';

describe('straight flush', () => {
  it('deve casar com straight flush', () => {
    let cartas = LeitorDeCartas.obterCartas('TO JO QO KO 9O');
    let maoDoJogador = new MaoDoJogador('jogador1', cartas);

    let jogada = maoDoJogador.calcularJogada();

    expect(jogada.pontuacao).toBeGreaterThanOrEqual(PesoDaJogada.StraightFlush);
  });

  it('deve casar com straight flush, sequencia menor', () => {
    let cartas = LeitorDeCartas.obterCartas('2O 3O 4O 6O 5O');
    let maoDoJogador = new MaoDoJogador('jogador1', cartas);

    let jogada = maoDoJogador.calcularJogada();

    expect(jogada.pontuacao).toBeGreaterThanOrEqual(PesoDaJogada.StraightFlush);
  });

  it('nao deve casar com straight flush, cartas nao formam sequencia', () => {
    let cartas = LeitorDeCartas.obterCartas('TO JO QO KO 4O');
    let maoDoJogador = new MaoDoJogador('jogador1', cartas);

    let jogada = maoDoJogador.calcularJogada();

    expect(jogada.pontuacao).toBeLessThan(PesoDaJogada.StraightFlush);
  });

  it('nao deve casar com straight flush, cartas nao sao do mesmo naipe', () => {
    let cartas = LeitorDeCartas.obterCartas('TO JO QO KO 9P');
    let maoDoJogador = new MaoDoJogador('jogador1', cartas);

    let jogada = maoDoJogador.calcularJogada();

    expect(jogada.pontuacao).toBeLessThan(PesoDaJogada.StraightFlush);
  });
});
