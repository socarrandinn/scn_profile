export enum TYPE_OF_MEASURE_ENUM {
  UNIT = 'UNIT',
  LENGTH = 'LENGTH',
  MASS = 'MASS',
  VOLUME = 'VOLUME',
};

export const MEASURES = {
  UNIT: {},
  LENGTH: {
    MM: 'MM',
    CM: 'CM',
    M: 'M',
    KM: 'KM',
  },
  MASS: {
    G: 'G',
    LB: 'LB',
    KG: 'KG',
    T: 'T',
  },
  VOLUME: { MM3: 'MM3', CM3: 'CM3', M3: 'M3', L: 'L', ML: 'ML' },
};
