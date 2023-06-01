import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import { PagePaperLayout } from 'layouts/index';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { requestFilters } from 'modules/rrhh/time-off/constants/time-off.filters';
import { timeOffViewTabs } from 'modules/rrhh/time-off/constants/time-off.viewtabs';
import { TimeOffRequestsContainer } from 'modules/rrhh/time-off/containers';

const TimeOffRequestsList = () => {
  const { t } = useTranslation('timeOff');
  return (
        <PagePaperLayout title={t('timeOffList')}>
            <TableProvider id={'timeOff'} filters={requestFilters}>
                <FilterViewProvider views={timeOffViewTabs}>
                    <TimeOffRequestsContainer/>
                </FilterViewProvider>
            </TableProvider>
        </PagePaperLayout>
  );
};

export default memo(TimeOffRequestsList);
