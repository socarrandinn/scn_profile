export interface IUserInvitation {
  _id?: string;
  email: string;
  security: {
    roles: string[];
  };
}
