import IMenuItemPage from 'components/libs/SettingMenuContent/IMenuItemPage';
import { REPORT_CAUSES, DISALLOWED_WORD } from 'modules/crm/common/constants/crm.entities.styles';
import { DISALLOWED_WORD_PERMISSIONS } from '../../disallowed-word/constants';
import { REPORT_CAUSE_PERMISSIONS } from '../../report-cause/constants';

export const crmSettingsMenu: IMenuItemPage[] = [
  {
    title: 'reportCause:list',
    description: 'reportCause:description',
    path: '/crm/settings/report-causes',
    icon: REPORT_CAUSES.ICON,
    color: REPORT_CAUSES.COLOR,
    permissions: [REPORT_CAUSE_PERMISSIONS.REPORT_CAUSE_VIEW],
  },
  {
    title: 'disallowedWord:list',
    description: 'disallowedWord:description',
    path: '/crm/settings/disallowed-words',
    icon: DISALLOWED_WORD.ICON,
    color: DISALLOWED_WORD.COLOR,
    permissions: [DISALLOWED_WORD_PERMISSIONS.DISALLOWED_WORD_VIEW],
  },
];
