export enum ROLE_TYPE_ENUM {
  PUBLIC = 'PUBLIC',
  LOGISTIC = 'LOGISTIC',
  PROVIDER = 'PROVIDER',
  ROOT = 'ROOT',
}

export const ROLE_TYPES_MAP = {
  [ROLE_TYPE_ENUM.PUBLIC]: 'public',
  [ROLE_TYPE_ENUM.ROOT]: 'admin',
  [ROLE_TYPE_ENUM.LOGISTIC]: 'provider',
  [ROLE_TYPE_ENUM.PROVIDER]: 'provider',
};
