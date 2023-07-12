import IMenuItemPage from 'components/libs/SettingMenuContent/IMenuItemPage';
import WorkIcon from '@mui/icons-material/Work';
import WorkOffIcon from '@mui/icons-material/WorkOff';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { JOB_POSITION_PERMISSIONS } from 'modules/store/employee/settings/job-position/constants/job-position.permissions';
import { REASON_FOR_JOB_CHANGE_PERMISSIONS } from 'modules/store/employee/settings/reason-for-job-change/constants';
import { REASON_FOR_COMPENSATION_CHANGE_PERMISSIONS } from 'modules/store/employee/settings/reason-for-compensation-change/constants';
import { WORK_LOCATION_PERMISSIONS } from 'modules/store/employee/settings/work-location/constants';
import { CATEGORY_PERMISSIONS } from 'modules/store/employee/settings/category/constants';
import { TIME_OFF_POLICES_PERMISSIONS } from 'modules/store/employee/settings/time-off-policies/constants/time-off-polices.permissions';

export const rrhhSettingsMenu: IMenuItemPage[] = [
  {
    title: 'category:categoryList',
    description: 'category:description',
    path: '/store/employee/settings/categories',
    icon: <AssignmentIndIcon fontSize='small' />,
    permissions: [CATEGORY_PERMISSIONS.CATEGORY_VIEW],
  },
  {
    title: 'jobPosition:jobPositionList',
    description: 'jobPosition:description',
    path: '/store/employee/settings/job-positions',
    icon: <WorkIcon fontSize='small' />,
    permissions: [JOB_POSITION_PERMISSIONS.JOB_POSITION_VIEW],
  },
  {
    title: 'reasonForJobChange:reasonForJobChangeList',
    description: 'reasonForJobChange:description',
    path: '/store/employee/settings/reason-for-job-change',
    icon: <WorkOffIcon fontSize='small' />,
    permissions: [REASON_FOR_JOB_CHANGE_PERMISSIONS.REASON_FOR_JOB_CHANGE_VIEW],
  },
  {
    title: 'reasonForCompensationChange:reasonForCompensationChangeList',
    description: 'reasonForCompensationChange:description',
    path: '/store/employee/settings/reason-for-compensation-change',
    icon: <MonetizationOnIcon fontSize='small' />,
    permissions: [REASON_FOR_COMPENSATION_CHANGE_PERMISSIONS.REASON_FOR_COMPENSATION_CHANGE_VIEW],
  },
  {
    title: 'workLocation:workLocationList',
    description: 'workLocation:description',
    path: '/store/employee/settings/work-locations',
    icon: <AddLocationAltIcon fontSize='small' />,
    permissions: [WORK_LOCATION_PERMISSIONS.WORK_LOCATION_VIEW],
  },
  {
    title: 'timeOffPolicy:timeOffPoliciesList',
    description: 'timeOffPolicy:description',
    path: '/store/employee/settings/time-off-policies',
    icon: <BeachAccessIcon fontSize='small' />,
    permissions: [TIME_OFF_POLICES_PERMISSIONS.TIME_OFF_POLICY_VIEW],
  },
];
