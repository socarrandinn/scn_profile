import { memo } from 'react'
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';
import CountValue, { CountValueProps } from 'components/libs/analytic/CountBox/CountValue';
import { ChildrenProps, FlexBox } from '@dfl/mui-react-common';

export type CountBoxProps = ChildrenProps & CountValueProps & {
  icon?: any
  sx?: any
  flexGrow?: boolean
}
const common = { padding: { xs: 2, md: 3 }, minWidth: { xs: '100%', md: 'auto' } };
const flexGrowSx = { ...common, flexGrow: 1 };

const CountBox = ({ icon, children, sx, flexGrow, ...value }: CountBoxProps) => {
  const commonSx = flexGrow ? flexGrowSx : common;
  return (
        <PaperTabView sx={commonSx} firsts>
            <FlexBox sx={sx}>
                {icon}
                <CountValue {...value}/>
                {children}
            </FlexBox>
        </PaperTabView>
  );
}

export default memo(CountBox);
