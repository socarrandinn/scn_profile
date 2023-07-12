import { TabRouteType } from '@dfl/react-security';
import { useTranslation } from 'react-i18next';
import { FlexBox } from '@dfl/mui-react-common';
import ListIcon from '@mui/icons-material/List';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const TabLabel = ({ label, Icon, disabled }: { label: string; Icon: any; disabled?: boolean }) => {
  const { t } = useTranslation('timeOff');
  return (
    <FlexBox gap={1} alignItems={'center'} color={!disabled ? 'primary.main' : undefined}>
      <Icon /> {t(label)}
    </FlexBox>
  );
};

export const timeOffTabs: TabRouteType[] = [
  {
    path: '/rrhh/time-off/requests',
    to: '/requests',
    label: 'tabs.requests',
    translate: true,
    render: () => <TabLabel Icon={ListIcon} label={'tabs.requests'} />,
  },
  {
    path: '/rrhh/time-off/history',
    to: '/history',
    label: 'tabs.history',
    translate: true,
    // permissions: ['USER_ADMIN'],
    render: () => <TabLabel Icon={ListIcon} label={'tabs.history'} />,
  },
  {
    path: '/rrhh/time-off/calendar',
    to: '/calendar',
    label: 'tabs.calendar',
    translate: true,
    disabled: true,
    // permissions: ['USER_ADMIN'],
    render: () => <TabLabel Icon={CalendarMonthIcon} label={'tabs.calendar'} />,
  },
];
