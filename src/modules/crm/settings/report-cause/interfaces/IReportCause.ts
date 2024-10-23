export interface IReportCause {
  _id?: string;
  name: string;
  description?: string;
  createdAt?: Date;
  active?: boolean;
}

export const reportCauses: IReportCause[] = [
  {
    _id: 'caus_id_1',
    name: 'Contenido obsceno o inapropiado',
  },
  {
    _id: 'caus_id_2',
    name: 'Lenguaje ofensivo o discriminatorio',
  },
  {
    _id: 'caus_id_3',
    name: 'Spam o contenido promocional no deseado',
  },
  {
    _id: 'caus_id_4',
    name: 'Acoso o bullying',
  },
  {
    _id: 'caus_id_5',
    name: 'Contenido fraudulento o engañoso',
  },
  {
    _id: 'caus_id_6',
    name: 'Amenazas o violencia',
  },
  {
    _id: 'caus_id_7',
    name: 'Discurso de odio o incitación al odio',
  },
  {
    _id: 'caus_id_8',
    name: 'Información sensible o confidencial',
  },
  {
    _id: 'caus_id_9',
    name: 'Contenido que viola los términos de uso o políticas del sitio web',
  },
];
