import { memo } from 'react';
import Donut, { DonutProps } from 'components/libs/analytic/Donut/Donut';

type DonutIconProps = DonutProps;
const DonutIcon = ({ children, ...props }: DonutIconProps) => {
  return (
        <Donut {...props}>
            <div style={{ fontSize: 4 }}>
                {children}
            </div>
        </Donut>
  );
};

export default memo(DonutIcon);
