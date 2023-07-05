export interface IMessage {
  _id?: string;
  name: string;
  description: string;
  createdAt?: Date;
  active?: boolean;
}
