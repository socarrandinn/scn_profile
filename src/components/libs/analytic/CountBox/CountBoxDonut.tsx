import { memo } from 'react'
import CountBox, { CountBoxProps } from 'components/libs/analytic/CountBox/CountBox';
import { FlexBox } from '@dfl/mui-react-common';
import BinaryDonutIcon from 'components/libs/analytic/Donut/BinaryDonutIcon';

type CountBoxDonutProps = CountBoxProps & {
  total: number | undefined
  color?: 'warning' | 'secondary' | 'primary' | 'error' | 'success' | 'info';
};
const CountBoxDonut = ({ children, value = 0, total = 0, color, ...props }: CountBoxDonutProps) => {
  return (
        <CountBox {...props} value={value}>
            <FlexBox flexWrap={'wrap'} mt={{ xs: 2, md: 0 }} mr={-3} ml={1}>
                <BinaryDonutIcon value={value} rest={total - value} color={color} size={150}>
                    {children}
                </BinaryDonutIcon>
            </FlexBox>
        </CountBox>
  );
}

export default memo(CountBoxDonut);
