import { Naipe } from 'modelo/naipe';
import { LeitorDeCartas } from 'servicos/leitor-de-cartas';

describe('Leitor de cartas', () => {
  it('deve ler a string de entrada e instanciar uma carta', () => {
    let representacaoDasCartas = '5C';

    let listaDeCartas = LeitorDeCartas.obterCartas(representacaoDasCartas);

    expect(listaDeCartas).toBeDefined();
    expect(listaDeCartas[0].valor).toBe(5);
    expect(listaDeCartas[0].naipe).toBe(Naipe.Copas);
  });

  it('deve ler a string de entrada e retornar a lista de cartas', () => {
    let representacaoDasCartas = '5C 4E 9P AE TC';

    let listaDeCartas = LeitorDeCartas.obterCartas(representacaoDasCartas);

    expect(listaDeCartas instanceof Array).toBeTruthy();
    expect(listaDeCartas.length).toBe(5);
  });
});
