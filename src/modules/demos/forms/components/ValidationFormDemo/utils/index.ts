export enum GENDER_ENUM {
  MALE = 'Male',
  FEMALE = 'Female',
}

export const bankAccountValidator = (value: string) => {
  const regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
  return value ? regex.test(value) : true;
};

export const getXYearsOldDate = (years: number = 18) => {
  const today = new Date();
  return new Date(today.getFullYear() - years, today.getMonth(), today.getDate());
};
