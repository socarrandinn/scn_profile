import {
  AssessmentOutlined,
  DescriptionOutlined,
  ReportOutlined,
} from '@mui/icons-material';
import { IMenu } from '@dfl/mui-react-common';
import { REPORT_CAUSE_PERMISSIONS } from 'modules/crm/settings/report-cause/constants';
import { DISALLOWED_WORD_PERMISSIONS } from 'modules/crm/settings/disallowed-word/constants';
import { ClientIcon, ReviewIcon } from 'modules/crm/common/components/icons';

export const CRM_MENU: IMenu[] = [
  {
    title: 'main_menu.admin.section.clients.title',
    prefix: '/crm',
    atLessOne: true,
    items: [
      {
        title: 'main_menu.admin.section.clients.clients',
        path: '/crm/clients',
        partialMatch: true,
        icon: <ClientIcon fontSize='small' />,
      },
      {
        title: 'main_menu.admin.section.clients.reviews',
        path: '/crm/reviews',
        partialMatch: true,
        icon: <ReviewIcon fontSize='small' />,
        // chip: <ReviewPendingChip />,
      },
    ],
  },
  {
    title: 'main_menu.admin.section.general.reports',
    prefix: 'reports/crm',
    atLessOne: true,
    items: [
      {
        title: 'main_menu.admin.section.clients.clients',
        path: '/reports/crm/clients',
        partialMatch: true,
        icon: <AssessmentOutlined fontSize='small' />,
      },
    ],
  },
  {
    title: 'main_menu.admin.section.general.settings',
    prefix: '/crm/settings',
    atLessOne: true,
    items: [
      {
        title: 'reportCause:list',
        path: '/crm/settings/report-causes',
        partialMatch: true,
        icon: <ReportOutlined fontSize='small' />,
        permissions: [REPORT_CAUSE_PERMISSIONS.REPORT_CAUSE_VIEW],
      },
      {
        title: 'disallowedWord:list',
        path: '/crm/settings/disallowed-words',
        partialMatch: true,
        icon: <DescriptionOutlined fontSize='small' />,
        permissions: [DISALLOWED_WORD_PERMISSIONS.DISALLOWED_WORD_VIEW],
      },
    ],
  },
];
