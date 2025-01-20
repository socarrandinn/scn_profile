import { createdATFilter, phoneFilter } from 'modules/common/constants/filters/common.filters';
import { userStatusFilter } from 'modules/security/users/constants/user-filters';

export const clientsFilters = [phoneFilter, userStatusFilter, createdATFilter];
export const recipientsFilters = [];
