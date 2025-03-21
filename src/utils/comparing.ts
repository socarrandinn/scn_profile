export const isOptionEqualToValue = (option: any, value: any) => {
  const optionId = option?._id || option;
  const valueId = value?._id || value;
  return optionId === valueId;
};
