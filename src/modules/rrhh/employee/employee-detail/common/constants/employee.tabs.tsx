import { TabRouteType } from '@dfl/react-security';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';

const TabLabel = ({ label, Icon, disabled }: { label: string, Icon: any, disabled?: boolean }) => {
  const { t } = useTranslation('employee');
  return (
        <FlexBox gap={1} alignItems={'center'} color={!disabled ? 'primary.main' : undefined}>
            <Icon/> {t(label)}
        </FlexBox>
  )
}

export const employeeTabs: TabRouteType[] = [
  {
    path: '/rrhh/employees/:id/personal',
    to: '/personal',
    label: 'tabs.personal',
    render: () => (<TabLabel Icon={AccountCircleIcon} label={'tabs.personal'}/>)
  },
  {
    path: '/rrhh/employees/:id/work',
    to: '/work',
    label: 'tabs.work',
    render: () => (<TabLabel Icon={BusinessCenterIcon} label={'tabs.work'}/>)
  },
  {
    path: '/rrhh/employees/:id/free-time',
    to: '/free-time',
    label: 'tabs.freeTime',
    render: () => (<TabLabel Icon={BeachAccessIcon} label={'tabs.freeTime'}/>)
  },
  {
    path: '/rrhh/employees/:id/benefits',
    to: '/benefits',
    label: 'tabs.benefits',
    disabled: true,
    render: () => (<TabLabel Icon={FavoriteIcon} label={'tabs.benefits'} disabled/>)
  }
];
