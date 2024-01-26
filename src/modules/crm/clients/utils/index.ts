import { EmptyFilter, OperatorFilter, TermFilter } from '@dofleini/query-builder';
import { CLIENTS_STATUS } from '../constants/clients.status';

export const getClientsStatusFilters = (value: string) => {
  switch (value) {
    case CLIENTS_STATUS.ACTIVE:
      return new OperatorFilter({
        type: 'AND',
        filters: [
          new TermFilter({ field: 'security.verified', value: true }),
          new TermFilter({ field: 'security.lock', value: false }),
        ],
      });

    case CLIENTS_STATUS.UNVERIFIED:
      return new OperatorFilter({
        type: 'AND',
        filters: [
          new TermFilter({ field: 'security.verified', value: false }),
          new TermFilter({ field: 'security.lock', value: false }),
        ],
      });

    case CLIENTS_STATUS.BLOCKED:
      return new TermFilter({ field: 'security.lock', value: true });

    default:
      return new EmptyFilter();
  }
};
