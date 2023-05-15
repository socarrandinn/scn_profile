import { ADVERTISEMENTS_TYPES } from 'modules/dashboard/constants/advertisements-types.constant';
import { ADVERTISEMENTS_AUDIENCE } from 'modules/dashboard/constants/advertisements-audience.constant';

export interface IAdvertisements {
  _id?: string;
  name: string;
  message: string;
  type: ADVERTISEMENTS_TYPES;
  audience: ADVERTISEMENTS_AUDIENCE;
  teams?: string[];
  employees?: string[];
}
