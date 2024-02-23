import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Timeline, sxFormPaper } from './styled';
import AuditLogTimelineItem from './AuditLogTimelineItem';
import { useAuditLogEntityContext } from '../../context/AuditLogEntityContext';
import { IAuditLogEntity } from '../../interfaces';
import AuditLogHistoryChangeSkeleton from './AuditLogHistoryChangeSkeleton';
import { PaperSection } from 'components/PaperSection';
import { CustomPaginate } from 'components/libs/CoustomPaginate';
import { useTablePagination } from '@dfl/mui-admin-layout';
import { Stack } from '@mui/material';
import { isEmpty } from 'lodash';
import { NotSearchResult } from '@dfl/mui-react-common';

const AuditLogHistoryChange = () => {
  const { t } = useTranslation('auditLog');
  const { data, isLoading, error, handleCloseEntity } = useAuditLogEntityContext();
  const { onPageChange, onRowsPerPageChange, page, rowsPerPage } = useTablePagination();

  // close entity id
  useMemo(() => handleCloseEntity?.(), [page, rowsPerPage]);

  if (isLoading || error) {
    return (
      <PaperSection nm title={t('title')} sx={{ ...sxFormPaper.sx }}>
        <AuditLogHistoryChangeSkeleton />
      </PaperSection>
    );
  }

  if (isEmpty(data?.data)) {
    return (
      <PaperSection nm title={t('title')} sx={{ ...sxFormPaper.sx }}>
        <Stack height={'100%'} justifyContent={'center'}>
          <NotSearchResult />
        </Stack>
      </PaperSection>
    );
  }

  return (
    <PaperSection nm title={t('title')} sx={{ ...sxFormPaper.sx }}>
      <Stack height={'100%'} justifyContent={'space-between'}>
        <Timeline>
          {data?.data?.map((entity: IAuditLogEntity, index: number) => (
            <AuditLogTimelineItem key={entity?._id} entity={entity} index={index} />
          ))}
        </Timeline>
        <CustomPaginate
          {...{
            total: data?.total || 0,
            isLoading: isLoading || false,
            rowsPerPage,
            page,
            onPageChange,
            onRowsPerPageChange,
          }}
        />
      </Stack>
    </PaperSection>
  );
};

export default memo(AuditLogHistoryChange);
