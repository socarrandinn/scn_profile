export interface IUsersInvite {
  _id?: string;
  name: string;
  description: string;
  createdAt?: Date;
  active?: boolean;
}

export interface ICreateUserInvite {
  _id?: string;
  email: string;
  security: {
    roles: string[];
  };
  provider?: string;
  warehouse?: string;
  distributionCenter?: string;
  inviteType?: USER_INVITE_TYPE_ENUM;
}

export enum USER_INVITE_STATUS_ENUM {
  ACTIVE = 'ACTIVE',
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  CANCELED = 'CANCELED',
}

export enum USER_INVITE_TYPE_ENUM {
  WAREHOUSE = 'WAREHOUSE',
  DISTRIBUTION_CENTER = 'DISTRIBUTION_CENTER',
  PROVIDER = 'PROVIDER',
  SYSTEM = 'SYSTEM',
}
