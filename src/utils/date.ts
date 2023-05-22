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
