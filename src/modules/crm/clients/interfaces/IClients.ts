export interface IClients {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  createdAt?: Date;
  active?: boolean;
}
