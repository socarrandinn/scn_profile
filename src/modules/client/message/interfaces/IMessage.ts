export interface IMessage {
  _id?: string;
  name: string;
  email: string;
  status: string;
  assigned: string;
  createdAt?: Date;
  active?: boolean;
}
