import { Carta } from 'modelo/carta';

const SEPARADOR_DE_CARTAS = ' ';
export class LeitorDeCartas {
  static obterCartas(cartasEmFormatoTextual) {
    let cartasIndividuais = cartasEmFormatoTextual.split(SEPARADOR_DE_CARTAS);
    let cartas = cartasIndividuais.map(carta => new Carta(carta));
    return cartas;
  }
}
