export interface IJobPosition {
  _id?: string;
  name: string;
  description: string;
  requirements?: string;
  responsibilities?: string;
  createdAt?: Date;
  owner?: string;
}
