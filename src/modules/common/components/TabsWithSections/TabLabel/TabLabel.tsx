import { memo } from 'react';
import { FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';

type TabLabelProps = {
  locale?: string;
  label: string;
  Icon: any;
  disabled?: boolean;
};

const TabLabel = ({ label, Icon, disabled, locale }: TabLabelProps) => {
  const { t } = useTranslation(locale);
  return (
    <FlexBox gap={1} alignItems={'center'} color={!disabled ? 'primary.main' : undefined}>
      <Icon /> {t(label)}
    </FlexBox>
  );
};

export default memo(TabLabel);

export const renderTabLabel = ({ ...props }: TabLabelProps) => {
  return <TabLabel {...props} />;
};
