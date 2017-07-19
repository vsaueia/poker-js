import { Carta } from 'modelo/carta';
import { Naipe } from 'modelo/naipe';

describe('Carta', () => {
  it('deve ser criada a partir do símbolo que a representa', () => {
    let carta = new Carta('5C');

    expect(carta.valor).toBe(5);
    expect(carta.naipe).toBe(Naipe.Copas);
  });

  it('pode receber letra como valor', () => {
    let carta = new Carta('TE');

    expect(carta.valor).toBe(10);
    expect(carta.naipe).toBe(Naipe.Espadas);
  });

  it('se nao conhecer a representacao do valor tem que dar erro', () => {
    expect(() => new Carta('OE')).toThrow(new Error('valor da carta não identificado'));
  });

  it('se nao conhecer a representacao do naipe tem que dar erro', () => {
    expect(() => new Carta('AI')).toThrow(new Error('naipe não identificado'));
  });
});
