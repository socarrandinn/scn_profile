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
export const formatNumWithTYpe = (value?: string, type?: string, currency?: string) => {
  if (value === undefined || value === null) return value;

  formatter.format(Number(value));
  switch (type) {
    case 'FIXED':
      return `${value} ${currency || ''}`;
    case 'PERCENT':
      return `${value}%`;
    default:
      return value;
  }
};

export const truncate = (str: number) => {
  return Math.trunc(str * 100) / 100;
};
export const formatDate = (date: string) => {
  return new Date(date).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
};

export const ApplyRate = (amount: number, rate: number) => {
  return rate * amount;
};
