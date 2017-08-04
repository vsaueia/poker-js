import { LeitorDeCartas } from 'servicos/leitor-de-cartas';
import { MaoDoJogador } from 'modelo/mao-do-jogador';
import { PesoDaJogada } from 'modelo/jogadas/peso-da-jogada';

describe('Uma dupla', () => {
  it('deve casar com uma dupla', () => {
    let cartas = LeitorDeCartas.obterCartas('TO TC QC AO 9O');
    let maoDoJogador = new MaoDoJogador('jogador1', cartas);

    let jogada = maoDoJogador.calcularJogada();
    expect(jogada.pontuacao).toBeGreaterThanOrEqual(PesoDaJogada.UmaDupla);
  });

  it('nao deve casar com uma dupla', () => {
    let cartas = LeitorDeCartas.obterCartas('TO 2C QC KO 9O');
    let maoDoJogador = new MaoDoJogador('jogador1', cartas);

    let jogada = maoDoJogador.calcularJogada();
    expect(jogada.pontuacao).toBeLessThan(PesoDaJogada.UmaDupla);
  });
});
