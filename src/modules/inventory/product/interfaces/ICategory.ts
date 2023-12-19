export interface ICategory {
  _id?: string;
  name: string;
  image: string;
  description: string;
  parent: string;
  order?: number;
  visible?: boolean;

  tracking?: boolean;
  collectionRef?: string;
}
