export interface IOrderStatus {
  _id?: string;
  title: string;
  description: string;
  order: number;
  tracking: boolean;
  color?: string;
  allowTo?: string[];
}
