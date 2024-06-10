import { Box, Tab } from '@mui/material';
import { ChildrenProps } from '@dfl/mui-react-common';
import { FC, memo, useEffect, useState } from 'react';
import { HeaderTab } from './styled';
import { isEmpty } from 'lodash';
import { FormPaperProps } from '../FormPaper/FormPaper';
import { PaperSection } from 'components/PaperSection';

interface DynamicTabsProps {
  title: string;
  component?: any;
  actions?: any;
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

const DynamicTabs: FC<DynamicTabsProps> = ({ title, component, actions, tabs, sxFromPaper }: DynamicTabsProps) => {
  const [selectedTab, onChange] = useState<string>('');
  const Component = component;
  const Actions = actions;

  useEffect(() => {
    if (!isEmpty(tabs?.[0]?.value)) {
      onChange(tabs?.[0]?.value);
    }
  }, [onChange, isEmpty, tabs]);

  if (isEmpty(tabs)) return <></>;

  return (
    <PaperSection nm {...sxFromPaper} title={title} actions={actions && <Actions selectedTab={selectedTab} />}>
      <HeaderTab
        value={selectedTab}
        onChange={(event, newValue) => {
          onChange(newValue);
        }}
        variant='scrollable'
        scrollButtons='auto'
        sx={{ mb: 2 }}
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
    </PaperSection>
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
