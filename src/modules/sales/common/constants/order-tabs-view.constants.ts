import { TabViews } from '@dfl/mui-admin-layout';

export const ORDER_VIEWS_ERROR: TabViews = {
    all: {
        title: 'all',
        filters: {},
        params: {
            payedDate: 'LAST-THIRTY-DAYS'
        }
    },
};

export const ORDER_VIEWS: TabViews = {
    all: {
        title: 'all',
        filters: {
            type: 'OR',
            filters: [],
        },
        params: {
            payedDate: 'LAST-THIRTY-DAYS'
        }
    },
    pending: {
        title: 'pending',
        filters: {
            type: 'OR',
            filters: [],
        },
        params: {
            payedDate: 'LAST-THIRTY-DAYS'
        }
    },
    processing: {
        title: 'processing',
        filters: {
            type: 'OR',
            filters: [],
        },
        params: {
            payedDate: 'LAST-THIRTY-DAYS'
        }
    },
    closed: {
        title: 'closed',
        filters: {
            type: 'OR',
            filters: [],
        },
        params: {
            payedDate: 'LAST-THIRTY-DAYS'
        }
    },
    error: {
        title: 'error',
        filters: {
            type: 'OR',
            filters: [],
        },
        params: {
            payedDate: 'LAST-THIRTY-DAYS'
        }
    },
};
