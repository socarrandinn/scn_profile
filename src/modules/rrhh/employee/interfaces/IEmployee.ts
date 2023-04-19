export interface IEmployee {
  _id?: string;
  title: string;
  description: string;
  requirements?: string;
  responsibilities?: string;
  createdAt?: Date;
  owner?: string;
}
