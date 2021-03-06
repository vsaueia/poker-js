import { LeitorDeCartas } from 'servicos/leitor-de-cartas';
import { MaoDoJogador } from 'modelo/mao-do-jogador';
import { PesoDaJogada } from 'modelo/jogadas/peso-da-jogada';

describe('Trinca', () => {
  it('deve casar com trinca', () => {
    let cartas = LeitorDeCartas.obterCartas('TO JO TC TE 9O');
    let maoDoJogador = new MaoDoJogador('jogador1', cartas);

    let jogada = maoDoJogador.calcularJogada();

    expect(jogada.pontuacao).toBeGreaterThanOrEqual(PesoDaJogada.Trinca);
  });

  it('nao deve casar com trinca', () => {
    let cartas = LeitorDeCartas.obterCartas('TO JO TC 7E 9O');
    let maoDoJogador = new MaoDoJogador('jogador1', cartas);

    let jogada = maoDoJogador.calcularJogada();

    expect(jogada.pontuacao).toBeLessThan(PesoDaJogada.Trinca);
  });
});
