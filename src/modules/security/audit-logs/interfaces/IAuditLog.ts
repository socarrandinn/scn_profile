import { AUDIT_LOG_EVENT_ENUM, AUDIT_LOG_MODULE_ENUM } from '../constants/audit-log.status';

export interface IAuditLog {
  _id?: string;
}

export interface IAuditLogEntity {
  _id: string;
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  module: AUDIT_LOG_MODULE_ENUM;
  event: AUDIT_LOG_EVENT_ENUM;
  entity: string;
  path: string;
  payload: any; // change
  updatedAt: Date;
  device?: IAudiLogDevice;
}

export interface IAudiLogDevice {
  client: {
    type: CLIENT_TYPE_ENUM;
    name: string;
    version: string;
    engine: string;
    engineVersion: string;
  };
  os: {
    name: string;
    version: string;
    platform: string;
  };
  device: {
    type: DEVICE_TYPE_ENUM;
    brand: string;
    model: string;
  };
  bot: null;
  hash: string;
  ip: string;
}

export interface CLIENT_TYPE_ENUM {
  browser: 'browser';
}
export interface DEVICE_TYPE_ENUM {
  desktop: 'desktop';
}
