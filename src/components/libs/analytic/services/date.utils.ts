import { format } from 'date-fns';

export const formatDate = (date: string) => {
  try {
    const dateString = date.split(':');
    const day = dateString[0].split('-');
    return Date.UTC(
      Number(day[0]),
      Number(day[1]) - 1,
      day?.length === 2 ? 1 : Number(day[2]),
      dateString?.length === 2 ? Number(dateString[1]) : 0,
    );
  } catch (e) {
    return date;
  }
};

export const AllSame = (value: number[]): boolean => {
  const setValues = new Set(value);
  return setValues.size === 1 && value[0] === 0;
};

export const extendedFormatDate = (date: string) => {
  try {
    const dateString = date.split(/:|T/);
    const day = dateString[0].split('-');
    return Date.UTC(Number(day[0]), Number(day[1]) - 1, day?.length === 2 ? 1 : Number(day[2]));
  } catch (e) {
    return date;
  }
};

export const formatObjectDate = (year: number, month: number, day: number = 1) => {
  const date = new Date(year, month - 1, day);
  return format(date, 'yyyy-MM-dd');
};

export const formatDayDate = (date: string, separator?: string) => {
  try {
    const datePart = date.split(separator || '/');
    return Date.UTC(Number(datePart[2]), Number(datePart[1]), Number(datePart[0]));
  } catch (e) {
    return date;
  }
};

export const dayWeekend = [
  { id: 1, name: 'sunday' },
  { id: 2, name: 'monday' },
  { id: 3, name: 'tuesday' },
  { id: 4, name: 'wednesday' },
  { id: 5, name: 'thursday' },
  { id: 6, name: 'friday' },
  { id: 7, name: 'saturday' },
];
