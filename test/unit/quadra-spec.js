import { LeitorDeCartas } from 'servicos/leitor-de-cartas';
import { MaoDoJogador } from 'modelo/mao-do-jogador';
import { PesoDaJogada } from 'modelo/jogadas/peso-da-jogada';

describe('Quadra', () => {
  it('deve casar com quadra', () => {
    let cartas = LeitorDeCartas.obterCartas('TP TC TE TO 9O');
    let maoDoJogador = new MaoDoJogador('jogador1', cartas);

    let jogada = maoDoJogador.calcularJogada();

    expect(jogada.pontuacao).toBeGreaterThanOrEqual(PesoDaJogada.Quadra);
  });

  it('deve casar com quadra', () => {
    let cartas = LeitorDeCartas.obterCartas('3P 3C 3E 3O 9O');
    let maoDoJogador = new MaoDoJogador('jogador1', cartas);

    let jogada = maoDoJogador.calcularJogada();

    expect(jogada.pontuacao).toBeGreaterThanOrEqual(PesoDaJogada.Quadra);
  });

  it('nao deve casar com quadra', () => {
    let cartas = LeitorDeCartas.obterCartas('3P 3C 3E 4O 4O');
    let maoDoJogador = new MaoDoJogador('jogador1', cartas);

    let jogada = maoDoJogador.calcularJogada();

    expect(jogada.pontuacao).toBeLessThan(PesoDaJogada.Quadra);
  });
});
