export interface ITeam {
  _id?: string;
  name: string;
  description?: string;
  icon?: string;
  color?: string;
  manager: string | null;
  tags?: string[];
  createdAt?: Date;
  active?: boolean;
}
