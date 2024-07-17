export const isTrue = (value: string | boolean) => {
  if (typeof value === 'string') {
    value = value.trim().toLowerCase();
  }
  switch (value) {
    case true:
    case 'true':
      return true;
    default:
      return false;
  }
};
