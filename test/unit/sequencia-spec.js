import { LeitorDeCartas } from 'servicos/leitor-de-cartas';
import { MaoDoJogador } from 'modelo/mao-do-jogador';
import { PesoDaJogada } from 'modelo/jogadas/peso-da-jogada';

describe('Sequencia', () => {
  it('deve casar com sequencia', () => {
    let cartas = LeitorDeCartas.obterCartas('2C 3C 4O 5E 6P');
    let maoDoJogador = new MaoDoJogador('jogador1', cartas);

    let pesoDaJogada = maoDoJogador.calcularJogada();

    expect(pesoDaJogada).toBeGreaterThanOrEqual(PesoDaJogada.Sequencia);
  });

  it('nao deve casar com sequencia', () => {
    let cartas = LeitorDeCartas.obterCartas('2C 3C TO 5E 6P');
    let maoDoJogador = new MaoDoJogador('jogador1', cartas);

    let pesoDaJogada = maoDoJogador.calcularJogada();

    expect(pesoDaJogada).toBeLessThan(PesoDaJogada.Flush);
  });

  it('nao deve casar com sequencia', () => {
    let cartas = LeitorDeCartas.obterCartas('TO TC QC KO 9C');
    let maoDoJogador = new MaoDoJogador('jogador1', cartas);

    let pesoDaJogada = maoDoJogador.calcularJogada();
    expect(pesoDaJogada).toBeLessThan(PesoDaJogada.Sequencia);
  });
});
