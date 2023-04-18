import IMenuItemPage from 'components/libs/SettingMenuContent/IMenuItemPage';
import WorkIcon from '@mui/icons-material/Work';
import WorkOffIcon from '@mui/icons-material/WorkOff';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { JOB_POSITION_PERMISSIONS } from 'modules/rrhh/settings/job-position/constants/job-position.permissions';
import { REASON_FOR_JOB_CHANGE_PERMISSIONS } from 'modules/rrhh/settings/reason-for-job-change/constants';
import {
  REASON_FOR_COMPENSATION_CHANGE_PERMISSIONS
} from 'modules/rrhh/settings/reason-for-compensation-change/constants';

export const rrhhSettingsMenu: IMenuItemPage[] = [
  {
    title: 'jobPosition:jobPositionList',
    description: 'jobPosition:description',
    path: '/rrhh/settings/job-positions',
    icon: <WorkIcon fontSize='small'/>,
    permissions: [JOB_POSITION_PERMISSIONS.JOB_POSITION_VIEW],
  },
  {
    title: 'reasonForJobChange:reasonForJobChangeList',
    description: 'reasonForJobChange:description',
    path: '/rrhh/settings/reason-for-job-change',
    icon: <WorkOffIcon fontSize='small'/>,
    permissions: [REASON_FOR_JOB_CHANGE_PERMISSIONS.REASON_FOR_JOB_CHANGE_VIEW],
  },
  {
    title: 'reasonForCompensationChange:reasonForCompensationChangeList',
    description: 'reasonForCompensationChange:description',
    path: '/rrhh/settings/reason-for-compensation-change',
    icon: <MonetizationOnIcon fontSize='small'/>,
    permissions: [REASON_FOR_COMPENSATION_CHANGE_PERMISSIONS.REASON_FOR_COMPENSATION_CHANGE_VIEW],
  }
];
