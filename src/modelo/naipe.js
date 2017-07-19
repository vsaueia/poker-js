export class Naipe {
  static Paus = 1;
  static Copas = 2;
  static Espadas = 3;
  static Ouro = 4;

  static obterNaipe(simbolo) {
    switch (simbolo) {
    case 'P': return Naipe.Paus;
    case 'C': return Naipe.Copas;
    case 'E': return Naipe.Espadas;
    case 'O': return Naipe.Ouro;
    default: throw new Error('naipe não identificado');
    }
  }
}
