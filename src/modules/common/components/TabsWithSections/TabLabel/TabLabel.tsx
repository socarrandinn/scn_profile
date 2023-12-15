import { FlexBox } from '@dfl/mui-react-common';
import { memo } from 'react';

type TabLabelProps = {
  locale?: string;
  label: string;
  Icon: any;
  disabled?: boolean;
};

const TabLabel = ({ label, Icon, disabled }: TabLabelProps) => {
  return (
    <FlexBox gap={1} alignItems={'center'} color={!disabled ? 'primary.main' : undefined}>
      <Icon /> {label}
    </FlexBox>
  );
};

export default memo(TabLabel);

export const renderTabLabel = ({ ...props }: TabLabelProps) => {
  return <TabLabel {...props} />;
};
