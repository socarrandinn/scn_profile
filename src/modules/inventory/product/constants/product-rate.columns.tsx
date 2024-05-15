import { HeadCell } from '@dfl/mui-admin-layout';

import { productReviewCommonColumns, reviewsStatusColumn } from 'modules/crm/reviews/constants';

export const productReviewColumns: HeadCell[] = [...productReviewCommonColumns, reviewsStatusColumn];
