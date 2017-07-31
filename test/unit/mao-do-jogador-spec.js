import { LeitorDeCartas } from 'servicos/leitor-de-cartas';
import { MaoDoJogador } from 'modelo/mao-do-jogador';

describe('Mao do jogador', () => {
  it('deve ter o nome do jogador que a possui', () => {
    let cartas = LeitorDeCartas.obterCartas('4P 4O 5P 5C 5E');
    let nomeDoJogador = 'jogador1';

    let maoDoJogador = new MaoDoJogador(nomeDoJogador, cartas);

    expect(maoDoJogador.nomeDoJogador).toBe(nomeDoJogador);
  });

  it('deve ter cinco cartas', () => {
    let cartas = LeitorDeCartas.obterCartas('4P 4O 5P 5C 5E');

    let maoDoJogador = new MaoDoJogador('', cartas);

    expect(maoDoJogador.cartas.length).toBe(5);
  });

  it('nao deve aceitar jogador com quantidade de cartas diferente de 5', () => {
    let cartas = LeitorDeCartas.obterCartas('4P 4O 5P 5C 5E 9O');

    expect(() => new MaoDoJogador('', cartas)).toThrow(new Error('cada jogador só pode ter cinco cartas'));
  });

  it('só pode aceitar array de cartas', () => {
    expect(() => new MaoDoJogador('', ['5C', '2P', '3C', '4E', 'AO'])).toThrow(new Error('entrada inválida'));
  });
});
