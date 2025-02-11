import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';

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

export const USER_ROLE_TYPE_MAP = {
  [ROLE_TYPE_ENUM.PUBLIC]: 'public',
  [ROLE_TYPE_ENUM.ROOT]: 'admin',
  [ROLE_TYPE_ENUM.PROVIDER]: 'providers',
  [ROLE_TYPE_ENUM.LOGISTIC]: 'providers',
};

export const ROLE_PRIORITY = {
  [ROLE_TYPE_ENUM.PUBLIC]: 1,
  [ROLE_TYPE_ENUM.ROOT]: 2,
  [ROLE_TYPE_ENUM.LOGISTIC]: 3,
  [ROLE_TYPE_ENUM.PROVIDER]: 4,
};

export const ROLE_ROUTE_MAP = {
  [SPACE_TYPE.PUBLIC]: 'public',
  [SPACE_TYPE.ROOT]: 'system',
  [SPACE_TYPE.PROVIDER]: 'providers',
};
