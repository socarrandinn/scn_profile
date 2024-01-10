import { Box, Tab } from '@mui/material';
import { ChildrenProps } from '@dfl/mui-react-common';
import { FC, memo, useState } from 'react';
import { HeaderTab } from './styled';
import { FormPaper } from '../FormPaper';
import { isEmpty } from 'lodash';
import { FormPaperProps } from '../FormPaper/FormPaper';
import { useTranslation } from 'react-i18next';

interface DynamicTabsProps {
  title: string;
  component?: any;
  locale?: string;
  tabs: Array<{
    label: string;
    value: string;
  }>;
  sxFromPaper?: FormPaperProps;
  translate?: boolean;
}
type TabPanelProps = ChildrenProps & {
  value: string;
  index: string;
};
type TabTitleProps = {
  title: string;
  locale: string;
  translate: boolean;
};

const DynamicTabs: FC<DynamicTabsProps> = ({
  title,
  component,
  locale = 'common',
  translate = false,
  tabs,
  sxFromPaper,
}: DynamicTabsProps) => {
  const [selectedTab, onChange] = useState<string>(tabs?.[0]?.value);
  const Component = component;

  if (isEmpty(tabs)) return <></>;

  return (
    <FormPaper {...sxFromPaper} title={title}>
      <HeaderTab
        value={selectedTab}
        onChange={(event, newValue) => {
          onChange(newValue);
        }}
        variant='scrollable'
        scrollButtons='auto'
      >
        {tabs?.map((tab) => (
          <Tab key={tab.value} label={TabTitle({ locale, title: tab.label, translate })} value={tab.value} />
        ))}
      </HeaderTab>

      {tabs?.map((tab) => (
        <TabPanel key={tab.value} value={selectedTab} index={tab.value}>
          <Component tab={tab} />
        </TabPanel>
      ))}
    </FormPaper>
  );
};

export default memo(DynamicTabs);

const TabPanel: FC<TabPanelProps> = ({ value, index, children }: TabPanelProps) => {
  return (
    <Box role='tabpanel' hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </Box>
  );
};

const TabTitle = ({ locale, title, translate }: TabTitleProps) => {
  const { t } = useTranslation(locale || 'common');
  if (translate) return t(title);
  return title;
};
