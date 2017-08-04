import { LeitorDeCartas } from 'servicos/leitor-de-cartas';
import { MaoDoJogador } from 'modelo/mao-do-jogador';
import { PesoDaJogada } from 'modelo/jogadas/peso-da-jogada';

describe('Duas duplas', () => {
  it('deve casar com duas duplas', () => {
    let cartas = LeitorDeCartas.obterCartas('TO TC QC QO 9O');
    let maoDoJogador = new MaoDoJogador('jogador1', cartas);

    let jogada = maoDoJogador.calcularJogada();
    expect(jogada.pontuacao).toBeGreaterThanOrEqual(PesoDaJogada.DuasDuplas);
  });

  it('nao deve casar com duas duplas', () => {
    let cartas = LeitorDeCartas.obterCartas('TO TC QC KO 9O');
    let maoDoJogador = new MaoDoJogador('jogador1', cartas);

    let jogada = maoDoJogador.calcularJogada();
    expect(jogada.pontuacao).toBeLessThan(PesoDaJogada.DuasDuplas);
  });
});
