import { ChildrenProps, LongText } from '@dfl/mui-react-common';
import { Stack } from '@mui/material';

type Props = ChildrenProps & {
  title: string;
};
const RuleLayout = ({ title, children }: Props) => {
  return (
    <Stack gap={1}>
      <LongText fontSize={16} fontWeight={500} lineClamp={1} text={title} />
      {children}
    </Stack>
  );
};

export default RuleLayout;
