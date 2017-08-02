import { LeitorDeCartas } from 'servicos/leitor-de-cartas';
import { MaoDoJogador } from 'modelo/mao-do-jogador';
import { PesoDaJogada } from 'modelo/jogadas/peso-da-jogada';

describe('Flush', () => {
  it('deve casar com flush', () => {
    let cartas = LeitorDeCartas.obterCartas('2C 7C QC JC 9C');
    let maoDoJogador = new MaoDoJogador('jogador1', cartas);

    let pesoDaJogada = maoDoJogador.calcularJogada();

    expect(pesoDaJogada).toBeGreaterThanOrEqual(PesoDaJogada.Flush);
  });

  it('nao deve casar com flush', () => {
    let cartas = LeitorDeCartas.obterCartas('2O 7O QO JO 9C');
    let maoDoJogador = new MaoDoJogador('jogador1', cartas);

    let pesoDaJogada = maoDoJogador.calcularJogada();

    expect(pesoDaJogada).toBeLessThan(PesoDaJogada.Flush);
  });
});
