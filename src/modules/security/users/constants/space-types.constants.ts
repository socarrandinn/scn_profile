export enum SPACE_TYPE {
  ROOT = 'ROOT',
  PUBLIC = 'PUBLIC',
  PROVIDER = 'PROVIDER',
}

export const SPACE_TYPES_MAP = {
  [SPACE_TYPE.PUBLIC]: 'public',
  [SPACE_TYPE.ROOT]: 'admin',
  [SPACE_TYPE.PROVIDER]: 'provider',
};
