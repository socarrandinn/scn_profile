export const getFieldValue = (field: string | null, defaultField: string) => {
  if (!field || field === 'undefined') {
    return defaultField;
  }
  return field;
};
