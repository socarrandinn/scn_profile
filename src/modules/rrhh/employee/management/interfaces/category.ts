type Category = {
  icon: string;
  name: string;
  _id: string;
};
export interface IEmployeeCategory {
  category: string | Category;
  dateActivated: Date;
  notes?: string;
}
