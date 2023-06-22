import { ADVERTISEMENTS_TYPES } from 'modules/rrhh/advertisement/constants/advertisement-types.constant';
import { ADVERTISEMENTS_AUDIENCE } from 'modules/rrhh/advertisement/constants/advertisement-audience.constant';

export interface IAdvertisement {
  _id?: string;
  name: string;
  message: string;
  type: ADVERTISEMENTS_TYPES;
  audience: ADVERTISEMENTS_AUDIENCE;
  teams?: string[];
  employees?: string[];
  onboarding?: boolean;
}
