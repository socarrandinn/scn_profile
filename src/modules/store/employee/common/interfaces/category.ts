type Category = {
  icon: string;
  name: string;
  _id: string;
};

export interface IEmployeeCategory {
  category: string | Category;
  dateActivated: Date;
  endActivated?: Date;
  isEnd?: boolean;
  notes?: string;
}
