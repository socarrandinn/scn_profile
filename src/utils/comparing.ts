export const isOptionEqualToValue = (option: any, value: any) => {
  console.log(option, value);
  const optionId = option?._id || option;
  const valueId = value?._id || value;
  return optionId === valueId;
};
