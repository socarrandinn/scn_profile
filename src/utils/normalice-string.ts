const replacements: Record<string, string> = {
  'Ã¡': 'á',
  'Ã©': 'é',
  'Ã­': 'í',
  'Ã³': 'ó',
  Ãº: 'ú',
  'Ã±': 'ñ',
  ÃÁ: 'Á',
  'Ã‰': 'É',
  ÃÍ: 'Í',
  'Ã“': 'Ó',
  Ãš: 'Ú',
  'Ã‘': 'Ñ',
  'â€œ': '“',
  'â€': '”',
  'â€˜': '‘',
  'â€™': '’',
  'â€¦': '…',
  'Â¡': '¡',
  'Â¿': '¿',
  Â: '',
};

const extReg = new RegExp(Object.keys(replacements).join('|'), 'g');

export const normalizeText = (text: string): string => {
  return text.replace(extReg, (match: string) => replacements[match]);
};
