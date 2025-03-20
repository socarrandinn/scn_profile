import { memo } from 'react';
import BinaryDonut, { BinaryDonutProps } from 'components/libs/analytic/Donut/BinaryDonut';

type BinaryDonutIconProps = BinaryDonutProps;
const BinaryDonutIcon = ({ children, ...props }: BinaryDonutIconProps) => {
  return (
    <BinaryDonut {...props}>
      <div style={{ fontSize: 4 }}>{children}</div>
    </BinaryDonut>
  );
};

export default memo(BinaryDonutIcon);
