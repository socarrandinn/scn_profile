import { IPerson } from '../interfaces/IOrder';

export const getFullName = (person: IPerson, separator: string = ' ') => {
  const full: string[] = [];
  if (person?.firstName) full.push(person?.firstName);
  if (person?.lastName) full.push(person?.lastName);

  return full.join(separator);
};
