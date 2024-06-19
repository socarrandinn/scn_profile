export interface IUsersInvite {
  _id?: string;
  name: string;
  description: string;
  createdAt?: Date;
  active?: boolean;
}

export enum USER_INVITE_STATUS_ENUM {
  ACTIVE = 'ACTIVE',
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}
