import { ChildrenProps, LongText } from '@dfl/mui-react-common';
import { Stack } from '@mui/material';
import { ReactNode } from 'react';

type Props = ChildrenProps & {
  title: string;
  subtitle?: ReactNode;
};
const RuleLayout = ({ title, children, subtitle }: Props) => {
  return (
    <Stack gap={1}>
      <Stack gap={1} flexDirection={'row'} alignItems={'center'}>
        <LongText fontSize={16} fontWeight={500} lineClamp={1} text={title} />
        {subtitle}
      </Stack>

      {children}
    </Stack>
  );
};

export default RuleLayout;
