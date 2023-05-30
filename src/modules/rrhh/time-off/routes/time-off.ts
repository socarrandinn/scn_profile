import { RouteConfig } from '@dfl/react-security';
import {
  TimeOffHistoryContainer,
  TimeOffRequestsContainer,
  TimeOffCalendarContainer,
} from 'modules/rrhh/time-off/containers';

const timeOffRoutes: RouteConfig = {
  requests: {
    path: '/requests',
    component: TimeOffRequestsContainer,
  },
  history: {
    path: '/history',
    component: TimeOffHistoryContainer,
  },
  calendar: {
    path: '/calendar',
    disabled: true,
    component: TimeOffCalendarContainer,
  },
};

export default timeOffRoutes;
