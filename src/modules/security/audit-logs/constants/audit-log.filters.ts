import { createdATFilter } from 'modules/common/constants';
import { getUserFilter } from 'modules/security/common/constants/filters';

const userFilter = getUserFilter('user._id');
export const auditLogFilters = [userFilter, createdATFilter];
