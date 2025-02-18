export const getBarChartHeight = (total: number) => {
  if (total > 0 && total < 10) {
    return 250;
  }
  return total * 45;
};
