import { ReasonForCompensationChangeList } from 'modules/rrhh/settings/reason-for-compensation-change/pages';
import { RouteConfig } from '@dfl/react-security';
import {
  REASON_FOR_COMPENSATION_CHANGE_PERMISSIONS
} from 'modules/rrhh/settings/reason-for-compensation-change/constants/reason-for-compensation-change.permissions';

const routes: RouteConfig = {
  ReasonForCompensationChangeList: {
    path: '/',
    permissions: REASON_FOR_COMPENSATION_CHANGE_PERMISSIONS.REASON_FOR_COMPENSATION_CHANGE_VIEW,
    component: ReasonForCompensationChangeList,
  },
};

export default routes;
