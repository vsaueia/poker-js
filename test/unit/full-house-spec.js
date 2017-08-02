import { LeitorDeCartas } from 'servicos/leitor-de-cartas';
import { MaoDoJogador } from 'modelo/mao-do-jogador';
import { PesoDaJogada } from 'modelo/jogadas/peso-da-jogada';

describe('Full House', () => {
  it('deve casar com full house', () => {
    let cartas = LeitorDeCartas.obterCartas('TP 9C TE 9C TO');
    let maoDoJogador = new MaoDoJogador('jogador1', cartas);

    let pesoDaJogada = maoDoJogador.calcularJogada();
    expect(pesoDaJogada).toBeGreaterThanOrEqual(PesoDaJogada.FullHouse);
  });

  it('nao deve casar com full house', () => {
    let cartas = LeitorDeCartas.obterCartas('TP 9C TE 9C AO');
    let maoDoJogador = new MaoDoJogador('jogador1', cartas);

    let pesoDaJogada = maoDoJogador.calcularJogada();
    expect(pesoDaJogada).toBeLessThan(PesoDaJogada.FullHouse);
  });

  it('nao deve casar com full house', () => {
    let cartas = LeitorDeCartas.obterCartas('TP TC TE 9C AO');
    let maoDoJogador = new MaoDoJogador('jogador1', cartas);

    let pesoDaJogada = maoDoJogador.calcularJogada();
    expect(pesoDaJogada).toBeLessThan(PesoDaJogada.FullHouse);
  });
});
