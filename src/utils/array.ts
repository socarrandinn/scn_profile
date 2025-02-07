export const arrayByObjectEmpty = (array: any[]) => {
  if (!Array.isArray(array) || array.length === 0) {
    return false;
  }

  for (const elemento of array) {
    if (typeof elemento === 'object' && elemento !== null && Object.keys(elemento).length === 0) {
      return true;
    }
  }

  return false;
};
