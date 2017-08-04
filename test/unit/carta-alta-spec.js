import { LeitorDeCartas } from 'servicos/leitor-de-cartas';
import { MaoDoJogador } from 'modelo/mao-do-jogador';
import { PesoDaJogada } from 'modelo/jogadas/peso-da-jogada';

describe('Carta alta', () => {
  it('deve casar com carta alta', () => {
    let cartas = LeitorDeCartas.obterCartas('2O 5C 6C 7O AO');
    let maoDoJogador = new MaoDoJogador('jogador1', cartas);

    let jogada = maoDoJogador.calcularJogada();
    expect(jogada.pontuacao).toBeGreaterThanOrEqual(PesoDaJogada.CartaAlta);
  });
});
