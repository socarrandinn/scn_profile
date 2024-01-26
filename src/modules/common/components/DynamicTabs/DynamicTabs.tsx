import { Box, Tab } from '@mui/material';
import { ChildrenProps } from '@dfl/mui-react-common';
import { FC, memo, useEffect, useMemo, useState } from 'react';
import { HeaderTab } from './styled';
import { FormPaper } from '../FormPaper';
import { isEmpty } from 'lodash';
import { FormPaperProps } from '../FormPaper/FormPaper';
import { useTranslation } from 'react-i18next';

interface DynamicTabsProps {
  title: string;
  component?: any;
  tabs: Array<{
    label: string;
    value: string;
  }>;
  sxFromPaper?: FormPaperProps;
}
type TabPanelProps = ChildrenProps & {
  value: string;
  index: string;
};


const DynamicTabs: FC<DynamicTabsProps> = ({
  title,
  component,
  tabs,
  sxFromPaper,
}: DynamicTabsProps) => {
  const [selectedTab, onChange] = useState<string>('');
  const Component = component;

  useEffect(() => {
    if (!isEmpty(tabs?.[0]?.value)) {
      onChange(tabs?.[0]?.value);
    }
  }, [onChange, isEmpty, tabs]);

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
          <Tab key={tab?.value} label={tab?.label} value={tab?.value} />
        ))}
      </HeaderTab>

      {tabs?.map((tab) => (
        <TabPanel key={tab?.value} value={selectedTab} index={tab?.value}>
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
