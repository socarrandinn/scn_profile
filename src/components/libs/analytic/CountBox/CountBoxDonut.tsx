import { memo } from 'react'
import CountBox, { CountBoxProps } from 'components/libs/analytic/CountBox/CountBox';
import { DonutIcon } from 'components/libs/analytic/Donut';
import { FlexBox } from '@dfl/mui-react-common';

type CountBoxDonutProps = CountBoxProps & {
  total: number | undefined
  color?: 'warning' | 'secondary' | 'primary' | 'error' | 'success' | 'info';
};
const CountBoxDonut = ({ children, value = 0, total = 0, color, ...props }: CountBoxDonutProps) => {
  return (
        <CountBox {...props} value={value}>
            <FlexBox flexWrap={'wrap'} mt={{ xs: 2, md: 0 }} mr={-3} ml={1}>
                <DonutIcon value={value} rest={total - value} color={color} size={150}>
                    {children}
                </DonutIcon>
            </FlexBox>
        </CountBox>
  );
}

export default memo(CountBoxDonut);
