import IMenuItemPage from 'components/libs/SettingMenuContent/IMenuItemPage';
import WorkIcon from '@mui/icons-material/Work';
import WorkOffIcon from '@mui/icons-material/WorkOff';
import { JOB_POSITION_PERMISSIONS } from 'modules/rrhh/settings/job-position/constants/job-position.permissions';
import { REASON_FOR_JOB_CHANGE_PERMISSIONS } from 'modules/rrhh/settings/reason-for-job-change/constants';

export const rrhhSettingsMenu: IMenuItemPage[] = [
  {
    title: 'jobPosition:jobPositionList',
    description: 'jobPosition:description',
    path: '/rrhh/settings/job-positions',
    icon: <WorkIcon fontSize='small' />,
    permissions: [JOB_POSITION_PERMISSIONS.JOB_POSITION_VIEW],
  },
  {
    title: 'reasonForJobChange:reasonForJobChangeList',
    description: 'reasonForJobChange:description',
    path: '/rrhh/settings/reason-for-job-change',
    icon: <WorkOffIcon fontSize='small' />,
    permissions: [REASON_FOR_JOB_CHANGE_PERMISSIONS.REASON_FOR_JOB_CHANGE_VIEW],
  },
  // {
  //   title: 'main_menu.admin.section.settings.subcategories',
  //   description: 'main_menu.admin.section.settings.subcategories',
  //   path: '/rrhh/settings/job-positions',
  //   icon: <CategoryIcon fontSize='small'/>,
  //   permissions: ['CATEGORY_VIEW'],
  // }
];
