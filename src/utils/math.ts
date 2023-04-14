export const Float = (value: number) => value * 1000;
export const ReverseFloat = (value: number) => (value !== 0 ? value / 1000 : 0);

export const sum = (sum1: number, sum2: number) => {
  return ReverseFloat(Float(sum1) + Float(sum2));
};
export const multiply = (float: number, factor: number) => {
  return ReverseFloat(Float(float) * factor);
};

export const percentage = (value: number, total: number) => {
  const val = Float(value) / Float(total);
  return multiply(val, 100);
};

const formatter = new Intl.NumberFormat('en', { maximumFractionDigits: 2 });

export const formatNum = (value: number) => formatter.format(value);
